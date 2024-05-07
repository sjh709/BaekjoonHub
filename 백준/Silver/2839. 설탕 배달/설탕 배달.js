const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (n) => {
  let answer = n;
  for (let i = 0; 5 * i <= n; i++) {
    const a = 5 * i;
    const b = n - a;
    if (b % 3 === 0) {
      const result = i + b / 3;
      answer = Math.min(answer, result);
    }
  }

  console.log(answer === n ? -1 : answer);
};

solution(Number(input[0]));
