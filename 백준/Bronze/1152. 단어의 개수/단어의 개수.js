const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = 0;
if (input[0].length > 0) {
  result = input[0].split(" ").length;
}
console.log(result);
