
// establishes a connection with the game server
const { stdin } = require('process');
const connect = require('./client');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function(key) {
  // your code here
  if (key === '\u0003') {
    console.log("disconnecting...");
    process.exit();
  }
};

stdin.on("data", handleUserInput);


console.log("Connecting ...");
connect();
setupInput();
