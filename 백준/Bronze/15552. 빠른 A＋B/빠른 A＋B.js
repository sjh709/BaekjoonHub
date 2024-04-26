const fs = require("fs");
const line = fs.readFileSync("/dev/stdin").toString().split("\n");

const t = Number(line[0]);

let result = "";
for (let i = 1; i <= t; i++) {
  const input = line[i].split(" ");
  const a = Number(input[0]);
  const b = Number(input[1]);

  result += a + b + "\n";
}

console.log(result);
