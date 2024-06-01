const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  let t = Number(input[0]);
  for (let i = 1; i <= t; i++) {
    let n = Number(input[i]);
    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 1;
    dp[3] = 1;
    dp[4] = 2;
    for (let i = 5; i <= n; i++) {
      dp[i] = dp[i - 5] + dp[i - 1];
    }
    console.log(dp[n]);
  }
};

solution(input);
