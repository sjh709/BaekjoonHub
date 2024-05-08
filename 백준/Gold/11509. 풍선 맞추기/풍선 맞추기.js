const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const n = Number(input[0]);
  const data = input[1].split(' ').map(Number);
  const arr = new Array(1000001).fill(0);
  let result = 0;
  for (let x of data) {
    if (arr[x] > 0) {
      arr[x] -= 1;
      arr[x - 1] += 1;
    } else {
      arr[x - 1] += 1;
      result += 1;
    }
  }
  console.log(result);
};

solution(input);
