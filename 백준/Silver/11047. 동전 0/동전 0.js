const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  let [n, k] = input[0].split(' ').map(Number);
  const coinArr = [];
  for (let i = 1; i <= n; i++) {
    coinArr.push(Number(input[i]));
  }

  let answer = 0;
  for (let i = n - 1; i >= 0; i--) {
    answer += parseInt(k / coinArr[i]);
    k %= coinArr[i];
  }

  console.log(answer);
};

solution(input);
