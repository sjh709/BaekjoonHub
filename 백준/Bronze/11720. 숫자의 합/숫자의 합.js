const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const sum = input[1]
    .split("")
    .map(Number)
    .reduce((acc, curr) => acc + curr);
  console.log(sum);
};

solution(input);
