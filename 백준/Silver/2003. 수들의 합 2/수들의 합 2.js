const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let data = input[1].split(' ').map(Number);

let cnt = 0;
let intervalSum = 0;
let end = 0;

for (let start = 0; start < n; start++) {
  while (intervalSum < m && end < n) {
    intervalSum += data[end];
    end += 1;
  }
  if (intervalSum === m) cnt += 1;
  intervalSum -= data[start];
}
console.log(cnt);
