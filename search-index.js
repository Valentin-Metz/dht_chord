var searchIndex = JSON.parse('{\
"dht_chord":{"doc":"Documentation for the project.","t":"AARRRRRDDEDDDDNNNNMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLFMLLLLLLLMMMMMMLFFMLLMFLLLLLLLLLLLLLLMLLLLLLLMMLLLLLLLDDLMLLLLLLLLLFLLOMMMLLLLLLLLLLLLFMLMMAMMFFLLLLLMLLLLLLLLLDNNNNNNNNNEDNDNNNNENNMLLLLLLLLLLLLLLLLLLLLLLMLLLLLLLLLLMLLLLLLMLLLLLMLLLLLLLLLLLLLLLLLLLLLLLL","n":["api_communication","chord","API_DHT_FAILURE","API_DHT_GET","API_DHT_PUT","API_DHT_SHUTDOWN","API_DHT_SUCCESS","ApiPacket","ApiPacketHeader","ApiPacketMessage","DhtGet","DhtGetFailure","DhtGetSuccess","DhtPut","Get","Put","Shutdown","Unparsed","_reserved","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","default","deserialize","deserialize","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","hash_key_bytes","header","into","into","into","into","into","into","into","key","key","key","key","message","message_type","parse","process_api_get_request","process_api_put_request","replication","serialize","serialize","size","start_api_server","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","ttl","type_id","type_id","type_id","type_id","type_id","type_id","type_id","value","value","vzip","vzip","vzip","vzip","vzip","vzip","vzip","Chord","ChordState","accept_peer_connection","address","am_responsible_for_key","as_chord_peer","ask_for_predecessor","ask_for_successor","assert_finger_table_invariants_correct","borrow","borrow","borrow_mut","borrow_mut","calculate_hash","clone","clone_into","connect_to_peer","default_replication_amount","default_storage_duration","finger_table","fix_fingers","from","from","get","get_predecessor","get_responsible_node","housekeeping","id_at_finger_index","insert","internal_insert","into","into","is_between_on_ring","max_storage_duration","new","node_id","node_storage","peer_messages","personal_storage","predecessors","require_proof_of_work","solve_proof_of_work","stabilize","stabilize_predecessor","stabilize_successor","start_housekeeping_thread","start_server_socket","state","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","vzip","vzip","ChordPeer","CloseConnection","Failure","GetNode","GetNodeResponse","GetPredecessor","GetPredecessorResponse","GetValue","GetValueResponse","InsertValue","PeerMessage","ProofOfWorkChallenge","ProofOfWorkChallenge","ProofOfWorkResponse","ProofOfWorkResponse","SetPredecessor","SetSuccessor","SplitRequest","SplitResponse","SplitResponse","Success","address","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","check","clone","clone","clone","clone_into","clone_into","clone_into","deserialize","deserialize","deserialize","deserialize","deserialize","difficulty","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","id","into","into","into","into","into","new","nonce","serialize","serialize","serialize","serialize","serialize","solution","solve","to_owned","to_owned","to_owned","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","vzip","vzip","vzip","vzip","vzip"],"q":[[0,"dht_chord"],[2,"dht_chord::api_communication"],[102,"dht_chord::chord"],[159,"dht_chord::chord::peer_messages"],[252,"core::result"],[253,"serde::de"],[254,"core::fmt"],[255,"core::fmt"],[256,"alloc::boxed"],[257,"tokio::net::tcp::split_owned"],[258,"tokio::sync::mutex"],[259,"alloc::sync"],[260,"serde::ser"],[261,"core::net::socket_addr"],[262,"tokio_util::sync::cancellation_token"],[263,"tokio::runtime::task::join"],[264,"core::any"],[265,"tokio::net::tcp::stream"],[266,"anyhow"],[267,"core::hash"],[268,"alloc::vec"],[269,"core::option"],[270,"core::time"],[271,"tokio::net::tcp::split"],[272,"channels::serdes::bincode"],[273,"channels::sender"],[274,"tokio::net::tcp::split"],[275,"tokio::net::tcp::split_owned"]],"d":["Provides a server socket for API communication","Implementation of a distributed hash table based on Chord","Answer to a failed <code>API_DHT_GET</code> request","Requests the DHT to retrieve a value","Requests the DHT to store a value","Requests our DHT node to shutdown","Answer to a successful <code>API_DHT_GET</code> request","Internal representation of all packages received on the …","Header of an <code>ApiPacket</code>","Content of an <code>ApiPacket</code>","Internal representation of a <code>DHT_GET</code> request","Internal representation of a <code>DHT_FAILURE</code> response","Internal representation of a <code>DHT_SUCCESS</code> response","Internal representation of a <code>DHT_PUT</code> request","","","","","Reserved for future use","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Fixed size 256 bit key (we hash all keys into a 64 bit …","","","","","Indicates the type of the message with a well-known …","","","","How many copies of the value should be stored in the DHT","","","The size indicates the total length of a message, <em>including</em>…","","","","","","","","","","","","","","","","Time-to-live of the value in seconds","","","","","","","","Value of arbitrary size","","","","","","","","","Distributed Hash Table","All data necessary for DHT operation","Handle incoming request from a connecting peer.","Our outward facing address.","Returns whether this node is responsible for a given key.","Returns a <code>ChordPeer</code> representing this node; useful for …","Returns a result with the predecessor of <code>node_to_ask</code>. If …","Asks a <code>ChordPeer</code> for its successor","Asserts that we do not contain ourselves in the finger …","","","","","Calculate hash for ID-mapping","","","","The default amount of replications which are done for each …","Default storage duration of entries, if not specified …","The characteristic Chord jump table. We maintain 64 …","Iterates through all finger table entries and asks the …","Returns the argument unchanged.","Returns the argument unchanged.","Queries the network for a given key and returns its …","Returns the predecessor of this node. If we do not have a …","Returns the <code>ChordPeer</code> responsible for a given key.","Performs the housekeeping which performs some periodic …","Returns the id which is <code>2^index</code> after this node","Inserts a key value pair into the network","Inserts an entry into our local <code>node_storage</code>, alongside …","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Check if a key is between two keys/nodes on the ring","The maximum duration for which we keep an item we have …","Construct new instance of chord.","Our own Node-ID.","The node storage keeps track of entries that have been …","Communication between peers","The personal storage keeps track of entries we have been …","List of predecessors do determine key responsibility and …","Sends a <code>ProofOfWorkChallenge</code> to the connected peer and …","Solves a <code>ProofOfWorkChallenge</code> and sends the corresponding …","Stabilized this node","Attempts to contact the predecessor at the given index. If …","Attempts to contact the given successor. If the successor …","Method to start the housekeeping thread","Starts the server socket to listen for incoming peer …","","","","","","","","","","","Uniquely identifies a peer in our network","Signals intent to gracefully close the connection; acting …","","Get node responsible for key","Response to <code>PeerMessage::GetNode</code>","Retrieves the predecessor of a node","Response to <code>PeerMessage::GetPredecessor</code>","Get value from responsible node","Response to <code>PeerMessage::GetValue</code>","Insert value into responsible node","All communication messages sent between peers","SHA-3-512 based proof-of-work challenge","Requests a node to solve a <code>ProofOfWorkChallenge</code>","Response to <code>PeerMessage::ProofOfWorkChallenge</code>","Response to <code>PeerMessage::ProofOfWorkChallenge</code>","Sets the predecessor of a node","Sets the successor of a node","Requests a node to split","Response to <code>PeerMessage::SplitRequest</code>","Response to <code>PeerMessage::SplitRequest</code>","","Address under which we can reach the peer","","","","","","","","","","","Checks if the given response is a valid solution to this …","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Node-ID of the peer (currently a hash of the address a …","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Creates a new proof-of-work challenge with the given …","","","","","","","","To solve the challenge, an integer must be found, that …","","","","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,45,45,45,45,8,1,45,2,8,5,9,10,1,45,2,8,5,9,10,1,2,5,2,8,5,9,10,1,45,2,8,5,9,10,0,1,1,45,2,8,5,9,10,8,5,9,10,1,2,1,0,0,8,2,10,2,0,1,45,2,8,5,9,10,1,45,2,8,5,9,10,8,1,45,2,8,5,9,10,8,9,1,45,2,8,5,9,10,0,0,17,46,17,17,17,17,17,46,17,46,17,0,17,17,0,46,46,46,17,46,17,17,17,17,17,17,17,17,46,17,0,46,17,46,46,0,46,46,0,0,17,17,17,17,17,17,17,46,17,46,17,46,17,46,17,0,35,44,35,35,35,35,35,35,35,0,0,35,0,35,35,35,35,0,35,44,29,29,35,44,42,43,29,35,44,42,43,42,29,42,43,29,42,43,29,35,44,42,43,42,29,35,44,42,43,29,35,44,42,43,29,29,35,44,42,43,42,42,29,35,44,42,43,43,42,29,42,43,29,35,44,42,43,29,35,44,42,43,29,35,44,42,43,29,35,44,42,43],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[],1],[-1,[[3,[2]]],4],[-1,[[3,[5]]],4],[[2,6],7],[[8,6],7],[[5,6],7],[[9,6],7],[[10,6],7],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[[[12,[11]]],13],0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],0,0,0,0,0,0,[[1,11],[[3,[14,[16,[15]]]]]],[[17,5,[20,[[19,[18]]]]],14],[[17,8],14],0,[[2,-1],3,21],[[10,-1],3,21],0,[[17,22,23],[[24,[14]]]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],0,[-1,25,[]],[-1,25,[]],[-1,25,[]],[-1,25,[]],[-1,25,[]],[-1,25,[]],[-1,25,[]],0,0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],0,0,[[17,26],[[27,[14]]]],0,[[17,13],28],[17,29],[[17,29],[[27,[29]]]],[[17,29],[[27,[29]]]],[17,14],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,13,30],[17,17],[[-1,-2],14,[],[]],0,0,0,0,[17,[[27,[14]]]],[-1,-1,[]],[-1,-1,[]],[[17,13],[[32,[[31,[11]]]]]],[17,29],[[17,13],[[27,[29]]]],[[17,23],14],[[17,33],13],[[17,13,[31,[11]],34,11],[[27,[14]]]],[[17,13,[31,[11]],34],[[27,[14]]]],[-1,-2,[],[]],[-1,-2,[],[]],[[13,13,13],28],0,[[[32,[22]],22,34,34],17],0,0,0,0,0,[[[38,[35,36,37]],[40,[35,39,37]],33],[[27,[14]]]],[[[38,[35,18,37]],[40,[35,41,37]]],[[27,[14]]]],[17,[[27,[14]]]],[[17,33],[[27,[14]]]],[[17,29],[[27,[29]]]],[[17,23],[[24,[14]]]],[[17,23],[[24,[14]]]],0,[-1,-2,[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,25,[]],[-1,25,[]],[-1,-2,[],[]],[-1,-2,[],[]],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[42,43],28],[29,29],[42,42],[43,43],[[-1,-2],14,[],[]],[[-1,-2],14,[],[]],[[-1,-2],14,[],[]],[-1,[[3,[29]]],4],[-1,[[3,[35]]],4],[-1,[[3,[44]]],4],[-1,[[3,[42]]],4],[-1,[[3,[43]]],4],0,[[29,6],7],[[35,6],7],[[44,6],7],[[42,6],7],[[43,6],7],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[33,42],0,[[29,-1],3,21],[[35,-1],3,21],[[44,-1],3,21],[[42,-1],3,21],[[43,-1],3,21],0,[42,43],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,[[3,[-2]]],[],[]],[-1,25,[]],[-1,25,[]],[-1,25,[]],[-1,25,[]],[-1,25,[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]]],"c":[],"p":[[3,"ApiPacket",2],[3,"ApiPacketHeader",2],[4,"Result",252],[8,"Deserializer",253],[3,"DhtGet",2],[3,"Formatter",254],[6,"Result",254],[3,"DhtPut",2],[3,"DhtGetSuccess",2],[3,"DhtGetFailure",2],[15,"u8"],[15,"slice"],[15,"u64"],[15,"tuple"],[8,"Error",255],[3,"Box",256],[3,"Chord",102],[3,"OwnedWriteHalf",257],[3,"Mutex",258],[3,"Arc",259],[8,"Serializer",260],[4,"SocketAddr",261],[3,"CancellationToken",262],[3,"JoinHandle",263],[3,"TypeId",264],[3,"TcpStream",265],[6,"Result",266],[15,"bool"],[3,"ChordPeer",159],[8,"Hash",267],[3,"Vec",268],[4,"Option",269],[15,"usize"],[3,"Duration",270],[4,"PeerMessage",159],[3,"WriteHalf",271],[3,"Bincode",272],[3,"Sender",273],[3,"ReadHalf",271],[3,"Receiver",274],[3,"OwnedReadHalf",257],[3,"ProofOfWorkChallenge",159],[3,"ProofOfWorkResponse",159],[4,"SplitResponse",159],[4,"ApiPacketMessage",2],[3,"ChordState",102]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
