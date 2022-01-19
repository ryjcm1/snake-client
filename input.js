const { stdin } = require('process');


let connection;


const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  connection = conn;
};

const handleUserInput = function(key) {
  // your code here
  if (key === '\u0003') {
    console.log("disconnecting...");
    process.exit();
  }

  if (key === "w") {
    console.log("moved up");
    connection.write("Move: up");
  }
  if (key === "a") {
    console.log("moved left");
    connection.write("Move: left");

  }
  if (key === "s") {
    console.log("moved down");
    connection.write("Move: down");

  }
  if (key === "d") {
    console.log("moved right");
    connection.write("Move: right");

  }

  if (key === "p") {
    connection.write("Say: LOL");
  }

  if (key === "o") {
    connection.write("Say: NOO");
  }

  if (key === "i") {
    connection.write("Say: HII");
  }


};

stdin.on("data", handleUserInput);


module.exports = {setupInput};