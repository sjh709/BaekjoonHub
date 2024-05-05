const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
