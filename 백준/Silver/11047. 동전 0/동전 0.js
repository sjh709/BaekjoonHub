const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  let [n, k] = input[0].split(' ').map(Number);
  const coinArr = [];
  for (let i = 1; i <= n; i++) {
    coinArr.push(Number(input[i]));
  }
  coinArr.sort((a, b) => b - a);

  let answer = 0;
  coinArr.forEach((coin) => {
    if (coin <= k) {
      answer += parseInt(k / coin);
      k %= coin;
    }
  });

  console.log(answer);
};

solution(input);
