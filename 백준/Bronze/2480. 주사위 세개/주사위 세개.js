const fs = require("fs");
const line = fs.readFileSync("/dev/stdin").toString().split("\n");

const [a, b, c] = line[0].split(" ").map(Number);

let result = 0;
if (a === b && b === c) {
  result = 10000 + a * 1000;
} else if (
  (a === b && b !== c) ||
  (a === c && c !== b) ||
  (b === c && c !== a)
) {
  if (a === b) {
    result = 1000 + a * 100;
  } else if (a === c) {
    result = 1000 + a * 100;
  } else {
    result = 1000 + b * 100;
  }
} else {
  const max = Math.max(a, b, c);
  result = max * 100;
}

console.log(result);
