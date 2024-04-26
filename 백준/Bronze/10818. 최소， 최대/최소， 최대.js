const fs = require("fs");
const line = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(line[0]);
const input = line[1].split(" ").map(Number);

const min = Math.min(...input);
const max = Math.max(...input);

console.log(min, max);
