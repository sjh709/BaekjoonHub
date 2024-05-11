const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const [n, m] = input[0].split(' ').map(Number);
  const arr = input[1].split(' ').map(Number);

  let start = 1;
  let end = arr.reduce((acc, curr) => Math.max(acc, curr), 0);
  let result = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;

    for (let x of arr) {
      total += x - Math.min(mid, x);
    }

    if (total >= m) {
      start = mid + 1;
      result = mid;
    } else {
      end = mid - 1;
    }
  }

  console.log(result);
};

solution(input);
