const fs = require("fs");
const line = fs.readFileSync("/dev/stdin").toString().split("\n");

const input = line.map(Number);
let set = new Set();

for (let i = 0; i < 10; i++) {
  set.add(input[i] % 42);
}

console.log(set.size);
