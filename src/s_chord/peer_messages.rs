use serde::{Deserialize, Serialize};
use std::net::IpAddr;

#[derive(Serialize, Deserialize, Debug)]
pub(crate) enum PeerMessage {
    GetNode(u64),
    GetNodeResponse(u64, IpAddr, u16),
    GetValue(u64),
    GetValueResponse(Option<Vec<u8>>),
    InsertValue(u64, Vec<u8>),
}
