const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = input[0];
const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}
arr.sort((a, b) => a - b);

let answer = '';
arr.forEach((v) => (answer += v + '\n'));
console.log(answer);
