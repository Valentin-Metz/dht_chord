#![feature(async_closure)]

//! Documentation and final report for the P2P DHT project.
//!
//! Our implementation is split into two core modules:
//! - [`api_communication`]
//! - [`chord`]
//!
//! The [`api_communication`] module
//!
//! The main executable of this program `p2p_dht` takes one command line argument, `-c <config>`,
//! where `<config>` is the path to a configuration file.
//! The configuration file is expected to be in the INI format. The following configuration options are available:
#![doc(html_favicon_url = "https://www.net.in.tum.de/favicon.ico")]
#![doc(html_logo_url = "/chord.png")]
mod api_communication;
pub mod chord;
