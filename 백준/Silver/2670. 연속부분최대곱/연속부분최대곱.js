const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  let n = Number(input[0]);
  let dp = [];
  for (let i = 1; i <= n; i++) {
    dp.push(Number(input[i]));
  }

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i], dp[i - 1] * dp[i]);
  }

  console.log(Math.max(...dp).toFixed(3));
};

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
