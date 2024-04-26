const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a, b] = input[0].split(" ");

const solution = (a, b) => {
  const reverseA = a.split("").reverse().join("");
  const reverseB = b.split("").reverse().join("");
  console.log(reverseA > reverseB ? reverseA : reverseB);
};

solution(a, b);
