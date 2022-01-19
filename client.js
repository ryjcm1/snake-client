const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "172.21.236.116",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () =>{
    console.log("you are now connected!");
    conn.write("Name: JKC")
    // conn.write("Move: up")
    setTimeout(()=> {
      conn.write("Move: down"), 50
    })

    setTimeout(()=> {
      conn.write("Move: right"), 100
    })

    setTimeout(()=> {
      conn.write("Move: down"), 150
    })

    setTimeout(()=> {
      conn.write("Move: right"), 200
    })
    setTimeout(()=> {
      conn.write("Move: down"), 250
    })

    setTimeout(()=> {
      conn.write("Move: right"), 500
    })

  });

  conn.on("data", (data) => {
    console.log('Server say: ', data);
  });

  return conn;
};

module.exports = connect;