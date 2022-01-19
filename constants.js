
const IP = "172.21.236.116";
const PORT = 50541;

const movementOuput = {
  w: "moved up",
  s: "moved down",
  a: "moved left",
  d: "move right",
  1: "said Hii",
  2: "said LOL",
  3: "said NOO"
};

const actionMapping = {
  w: "Move: up",
  s: "Move: down",
  a: "Move: left",
  d: "Move: right",
  1: "Say: LOL",
  2: "Say: Hii",
  3: "Say: NOO"
};

module.exports = {
  IP,
  PORT,
  movementOuput,
  actionMapping
};