const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  let arr = input[1].split(" ").map(Number);
  const max = Math.max(...arr);
  arr = arr.map((v) => (v / max) * 100);
  const avg = arr.reduce((acc, curr) => acc + curr) / n;
  console.log(avg);
};

solution(input);
