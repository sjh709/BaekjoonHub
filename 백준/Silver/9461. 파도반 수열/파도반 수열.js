const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let dp = new Array(101).fill(0);
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;

for (let i = 4; i <= 100; i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}

const solution = (input) => {
  let t = Number(input[0]);
  for (let i = 1; i <= t; i++) {
    let n = Number(input[i]);
    console.log(dp[n]);
  }
};

solution(input);
