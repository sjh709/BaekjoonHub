const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(Number(line) % 42);
}).on("close", function () {
  const set = new Set(input);
  console.log(set.size);
  process.exit();
});
