const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  let n = Number(input[0]);
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
  }
  console.log(dp[n]);
};

const input = [];
rl.on('line', function (line) {
  input.push(line);
  rl.close();
}).on('close', function () {
  solution(input);
  process.exit();
});
