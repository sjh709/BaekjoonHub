const fs = require("fs");
const line = fs.readFileSync("/dev/stdin").toString().split("\n");

const a = Number(line[0]);
const b = Number(line[1]);

console.log(a * (b % 10));
console.log(a * parseInt((b % 100) / 10));
console.log(a * parseInt(b / 100));
console.log(a * b);
