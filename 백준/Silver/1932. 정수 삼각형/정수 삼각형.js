const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  let n = Number(input[0]);
  let arr = new Array(n);
  for (let i = 0; i < n; i++) arr[i] = new Array(n).fill(0);
  for (let i = 1; i <= n; i++) {
    let line = input[i].split(' ').map(Number);
    for (let j = 0; j < line.length; j++) {
      arr[i - 1][j] = line[j];
    }
  }

  let dp = new Array(n);
  for (let i = 0; i < n; i++) dp[i] = new Array(n).fill(0);

  dp[0][0] = arr[0][0];
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + arr[i][j];
      } else if (j === i) {
        dp[i][j] = dp[i - 1][j - 1] + arr[i][j];
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j - 1] + arr[i][j],
          dp[i - 1][j] + arr[i][j]
        );
      }
    }
  }

  console.log(Math.max(...dp[n - 1]));
};

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
