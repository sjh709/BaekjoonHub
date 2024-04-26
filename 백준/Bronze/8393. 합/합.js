const fs = require("fs");
const line = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(line[0]);

let result = 0;
for (let i = 1; i <= n; i++) {
  result += i;
}

console.log(result);
