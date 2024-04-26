const fs = require("fs");
const line = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(line[0]);

for (let i = 1; i < 10; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}
