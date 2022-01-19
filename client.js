const net = require("net");
const {IP, PORT} = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () =>{
    console.log("you are now connected!");
    conn.write("Name: JKC");
    
  });

  conn.on("data", (data) => {
    console.log('Server say: ', data);
  });

  return conn;
};

module.exports = {connect};