const fs = require("fs");
const line = fs.readFileSync("/dev/stdin").toString().split("\n");

const input = line[0].split(" ");
const a = Number(input[0]);
const b = Number(input[1]);

let result = "";
result += a + b + "\n";
result += a - b + "\n";
result += a * b + "\n";
result += parseInt(a / b) + "\n";
result += (a % b) + "\n";

console.log(result);
