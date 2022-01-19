const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "172.21.236.116",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () =>{
    console.log("you are now connected!");
  });

  conn.on("data", (data) => {
    console.log('Server say: ', data);
  });

  return conn;
};


console.log("Connecting ...");
connect();

