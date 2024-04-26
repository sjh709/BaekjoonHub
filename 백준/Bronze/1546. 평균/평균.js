const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = Number(input[0]);
  let arr = input[1].split(" ").map(Number);
  const max = Math.max(...arr);
  arr = arr.map((v) => (v / max) * 100);
  const avg = arr.reduce((acc, curr) => acc + curr) / n;
  console.log(avg);
};

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
