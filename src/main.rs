#![feature(async_closure)]

mod dht;

use bincode::{deserialize, serialize};
use serde::{Deserialize, Serialize};
use std::error::Error;
use std::net::SocketAddr;
use std::sync::Arc;
use std::time::Duration;
use tokio::io::{AsyncReadExt, AsyncWriteExt};
use tokio::net::{TcpListener, TcpStream};

struct Dht {
    dht: dht::SChord<[u8; 32], Vec<u8>>,
}

struct ApiPacket {
    header: ApiPacketHeader,
    message: ApiPacketMessage,
}

#[derive(Serialize, Deserialize, Debug)]
struct ApiPacketHeader {
    size: u16,
    message_type: u16,
}

enum ApiPacketMessage {
    Put(DhtPut),
    Get(DhtGet),
    Unparsed(Vec<u8>),
}

#[derive(Deserialize, Debug)]
struct DhtPut {
    ttl: u16,
    _replication: u8,
    _reserved: u8,
    key: [u8; 32],
    value: Vec<u8>,
}

impl Dht {
    fn new(initial_peers: &[SocketAddr]) -> Self {
        Dht {
            dht: dht::SChord::new(initial_peers),
        }
    }
    async fn put(&self, put: DhtPut) {
        self.dht
            .insert_with_ttl(put.key, put.value, Duration::from_secs(put.ttl as u64))
            .await;
    }
    async fn get(
        &self,
        get: &DhtGet,
        response_socket: &mut TcpStream,
    ) -> Result<(), Box<dyn Error>> {
        let key = &get.key;
        match self.dht.get(key).await {
            Some(value) => {
                let header = ApiPacketHeader {
                    size: 4 + key.len() as u16 + value.len() as u16,
                    message_type: 652,
                };
                let mut buf = serialize(&header).unwrap();
                buf.extend(key);
                buf.extend(value);
                response_socket.write_all(&buf).await?;
            }
            None => {
                let header = ApiPacketHeader {
                    size: 4 + key.len() as u16,
                    message_type: 653,
                };
                let mut buf = serialize(&header).unwrap();
                buf.extend(key);
                response_socket.write_all(&buf).await?;
            }
        }
        Ok(())
    }
}

#[derive(Deserialize, Debug)]
struct DhtGet {
    key: [u8; 32],
}

#[derive(Serialize, Debug)]
struct DhtSuccess {
    key: [u8; 32],
    value: Vec<u8>,
}

#[derive(Serialize, Debug)]
struct DhtFailure {
    key: [u8; 32],
}

impl ApiPacket {
    fn default() -> Self {
        ApiPacket {
            header: ApiPacketHeader {
                size: 0,
                message_type: 0,
            },
            message: ApiPacketMessage::Unparsed(Vec::new()),
        }
    }
    fn parse(&mut self, byte: u8) -> Result<(), Box<dyn Error>> {
        if let ApiPacketMessage::Unparsed(v) = &mut self.message {
            v.push(byte);
            if self.header.size as usize <= v.len() + 4 {
                match self.header.message_type {
                    // DHT PUT
                    650 => {
                        if self.header.size < 4 + 4 + 32 + 1 {
                            return Err("Invalid size".into());
                        }
                        self.message = ApiPacketMessage::Put(deserialize(v)?);
                    }
                    // DHT GET
                    651 => {
                        if self.header.size != 4 + 32 {
                            return Err("Invalid size".into());
                        }
                        self.message = ApiPacketMessage::Get(deserialize(v)?);
                    }
                    _ => return Err("Unknown message type".into()),
                }
            }
        } else {
            panic!("Message already parsed");
        }
        Ok(())
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    // todo: parse config file
    // todo: RPS communication for bootstrap peers or get from config file
    let dht = Arc::new(Dht::new(&[]));
    let listener = TcpListener::bind("127.0.0.1:7401").await?;
    loop {
        let (mut socket, _) = listener.accept().await?;
        let dht = Arc::clone(&dht);
        tokio::spawn(async move {
            let connection_result = async move || -> Result<(), Box<dyn Error>> {
                let mut buf = [0; 1024];

                let mut header_bytes = Vec::new();
                let mut packet: ApiPacket = ApiPacket::default();

                // Read data from socket
                loop {
                    let n = match socket.read(&mut buf).await {
                        // socket closed
                        Ok(n) if n == 0 => return Ok(()),
                        Ok(n) => n,
                        Err(e) => return Err(e.into()),
                    };
                    for byte in &buf[0..n] {
                        if header_bytes.len() < 4 {
                            header_bytes.push(*byte);
                            if header_bytes.len() == 4 {
                                if let Ok(header_success) = deserialize(&header_bytes) {
                                    packet.header = header_success;
                                } else {
                                    return Err("Could not deserialize header".into());
                                }
                            }
                        } else {
                            packet.parse(*byte)?;
                            match packet.message {
                                ApiPacketMessage::Unparsed(_) => {}
                                // todo: async - call put in new thread
                                ApiPacketMessage::Put(p) => {
                                    dht.put(p).await;
                                    header_bytes.clear();
                                    packet = ApiPacket::default();
                                }
                                // todo: async - call get in new thread
                                ApiPacketMessage::Get(g) => {
                                    dht.get(&g, &mut socket).await?;
                                    header_bytes.clear();
                                    packet = ApiPacket::default();
                                }
                            }
                        }
                    }
                }
            };
            if let Err(e) = connection_result().await {
                println!("Error on connection: {}", e)
            }
        });
    }
}
