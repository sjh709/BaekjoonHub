const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const t = Number(input[0]);
  let result = "";
  for (let i = 1; i <= t; i++) {
    const r = Number(input[i].split(" ")[0]);
    const s = input[i].split(" ")[1];
    for (let x of s) {
      result += x.repeat(r);
    }
    result += "\n";
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
