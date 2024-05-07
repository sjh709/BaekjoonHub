const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const t = Number(input[0]);
  let line = 1;
  for (let i = 0; i < t; i++) {
    const n = Number(input[line]);
    let arr = [];
    for (let j = line + 1; j <= line + n; j++) {
      const data = input[j].split(' ').map(Number);
      arr.push(data);
    }
    arr.sort((a, b) => a[0] - b[0]);
    let count = 0;
    let minValue = 100001;
    for (let [x, y] of arr) {
      if (y < minValue) {
        count += 1;
        minValue = y;
      }
    }
    console.log(count);
    line += n + 1;
  }
};

solution(input);
