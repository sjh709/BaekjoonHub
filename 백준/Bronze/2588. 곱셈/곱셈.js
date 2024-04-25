const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  const a = input[0];
  const b = input[1];

  console.log(a * (b % 10));
  console.log(a * parseInt((b % 100) / 10));
  console.log(a * parseInt(b / 100));
  console.log(a * b);

  process.exit();
});
