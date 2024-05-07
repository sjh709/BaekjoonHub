const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  let [a, b] = input[0].split(' ').map(Number);
  let cnt = 0;

  while (a < b) {
    if (b % 2 === 0) {
      b /= 2;
    } else if (b % 10 === 1) {
      b = parseInt(b / 10);
    } else {
      break;
    }
    cnt++;
  }

  console.log(a === b ? cnt + 1 : -1);
};

solution(input);
