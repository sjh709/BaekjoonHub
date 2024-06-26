const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const n = Number(input[0]);
  const arr = input[1].split(' ').map(Number);
  const m = Number(input[2]);

  let [start, end] = [1, Math.max(...arr)];
  let result = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;

    for (let x of arr) {
      total += Math.min(x, mid);
    }

    if (total <= m) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log(end);
};

solution(input);
