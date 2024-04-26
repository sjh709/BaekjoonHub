const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const c = Number(input[0]);
  let result = "";
  for (let i = 1; i <= c; i++) {
    const arr = input[i].split(" ").map(Number);
    const n = arr.shift();
    const avg = arr.reduce((acc, curr) => acc + curr) / n;
    const count = arr.filter((v) => v > avg).length;
    result += ((count / n) * 100).toFixed(3) + "%\n";
  }
  console.log(result);
};

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
