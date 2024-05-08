const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const n = Number(input[0]);

  const arr = [];
  for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    arr.push([a, b]);
  }
  arr.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  let time = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (time <= arr[i][0]) {
      time = arr[i][1];
      count += 1;
    }
  }
  console.log(count);
};

solution(input);
