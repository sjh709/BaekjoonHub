const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (n) => {
  let cnt = Array(10).fill(0);
  for (let x of n) {
    cnt[Number(x)]++;
  }

  let answer = '';
  for (let i = 9; i >= 0; i--) {
    for (let j = 0; j < cnt[i]; j++) {
      answer += i + '';
    }
  }
  console.log(answer);
};

solution(input[0]);
