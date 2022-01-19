const { stdin } = require('process');
const {movementOuput, actionMapping} = require("./constants");

const availableActions = Object.keys(actionMapping);

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

  if (availableActions.includes(key)) {
    console.log(movementOuput[key]);
    connection.write(actionMapping[key]);

  }

};

stdin.on("data", handleUserInput);


module.exports = {setupInput};