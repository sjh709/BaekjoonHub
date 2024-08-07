const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const m = Number(input[2]);
let sum = [0];

for (let i = 0; i < n; i++) {
  const result = sum[i] + arr[i];
  sum.push(result);
}

let result = '';
for (let k = 3; k < 3 + m; k++) {
  const [i, j] = input[k].split(' ').map(Number);
  result += sum[j] - sum[i - 1] + '\n';
}

console.log(result);
