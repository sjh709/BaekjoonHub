const fs = require("fs");
const line = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(line[0]);

for (let i = 0; i < n; i++) {
  let result = "";
  for (let j = 0; j < i + 1; j++) {
    result += "*";
  }
  console.log(result);
}
