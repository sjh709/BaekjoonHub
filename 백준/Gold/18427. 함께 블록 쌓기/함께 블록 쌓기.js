const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m, h] = input[0].split(' ').map(Number);
let a = [];
let d = new Array(h + 1).fill(0);
for (let i = 1; i <= n; i++) {
  a.push(input[i].split(' ').map(Number));
}

d[0] = 1;
for (let i = 0; i < n; i++) {
  // 학생
  let data = [];
  for (let j = 0; j <= h; j++) {
    // 높이
    for (let k = 0; k < a.length; k++) {
      if (d[j] !== 0 && j + a[i][k] <= h) {
        data.push([j + a[i][k], d[j]]);
      }
    }
  }
  for ([height, value] of data) {
    d[height] = (d[height] + value) % 10007;
  }
}
console.log(d[h]);
