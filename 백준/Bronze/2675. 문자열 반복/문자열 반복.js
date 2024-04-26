const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

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

solution(input);
