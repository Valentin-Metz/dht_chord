//! Communication between peers
//!
//! We are using a data serialization library called "[channels-rs](https://crates.io/crates/channels)" to serialize and
//! deserialize our data.
//! This library allows us to transmit a struct/enum over TCP directly.
//!
//! Packet layout:
//!
//! ![](https://raw.githubusercontent.com/threadexio/channels-rs/master/spec/assets/packet-diagram-dark.svg)
//!
//! The exact protocol specification can be found [here](https://github.com/threadexio/channels-rs/blob/master/spec/PROTOCOL.md).
//!
//! More importantly, this means that we do *not* have to interact with a raw byte-level TCP socket.
//! Instead, we simply transmit and match a [`PeerMessage`].
//!
use std::net::SocketAddr;
use std::time::Duration;

use rand::random;
use serde::{Deserialize, Serialize};
use sha3::Digest;
use sha3::Sha3_512;

/// Uniquely identifies a peer in our network
#[derive(Serialize, Deserialize, Debug, Copy, Clone)]
pub struct ChordPeer {
    /// Node-ID of the peer (currently a hash of the address a peer announces itself with)
    pub(crate) id: u64,
    /// Address under which we can reach the peer
    pub(crate) address: SocketAddr,
}

/// All communication messages sent between peers
#[derive(Serialize, Deserialize, Debug)]
pub enum PeerMessage {
    GetNode(u64),
    GetNodeResponse(ChordPeer),
    GetValue(u64),
    GetValueResponse(Option<Vec<u8>>),
    InsertValue(u64, Vec<u8>, Duration),
    SplitRequest(ChordPeer),
    SplitResponse(SplitResponse),
    GetPredecessor,
    GetPredecessorResponse(ChordPeer),
    SetPredecessor(ChordPeer),
    SetSuccessor(ChordPeer),
    ProofOfWorkChallenge(ProofOfWorkChallenge),
    ProofOfWorkResponse(ProofOfWorkResponse),
    CloseConnection,
}

#[derive(Serialize, Deserialize, Debug)]
pub enum SplitResponse {
    Success(Vec<(u64, Vec<u8>)>),
    Failure(ChordPeer), // Predecessor that is responsible instead
}

#[derive(Serialize, Deserialize, Debug, Copy, Clone)]
pub struct ProofOfWorkChallenge {
    nonce: u128,
    pub(crate) difficulty: usize,
}

impl ProofOfWorkChallenge {
    pub fn new(difficulty: usize) -> Self {
        Self {
            nonce: random(),
            difficulty,
        }
    }
    pub fn solve(&self) -> ProofOfWorkResponse {
        let mut hasher = Sha3_512::new();
        hasher.update(self.nonce.to_le_bytes());

        loop {
            let mut hasher = hasher.clone();
            let random_number = random::<u128>();
            hasher.update(random_number.to_le_bytes());
            if hasher
                .finalize()
                .as_slice()
                .iter()
                .take(self.difficulty)
                .all(|byte| *byte == 0)
            {
                return ProofOfWorkResponse {
                    solution: random_number,
                };
            }
        }
    }

    pub fn check(&self, response: ProofOfWorkResponse) -> bool {
        let mut hasher = Sha3_512::new();
        hasher.update(self.nonce.to_le_bytes());
        hasher.update(response.solution.to_le_bytes());
        hasher
            .finalize()
            .as_slice()
            .iter()
            .take(self.difficulty)
            .all(|byte| *byte == 0)
    }
}

#[derive(Serialize, Deserialize, Debug, Copy, Clone)]
pub struct ProofOfWorkResponse {
    solution: u128,
}

#[test]
fn proof_of_work_test() {
    let challenge = ProofOfWorkChallenge::new(2);
    let response = challenge.solve();
    assert!(challenge.check(response));
    assert!(!challenge.check(ProofOfWorkResponse { solution: 0 }));
}
