const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  let t = Number(input[0]);

  for (let i = 1; i <= t; i++) {
    let n = Number(input[i]);
    let dp = new Array(n + 1).fill(0);

    function fibo(n) {
      if (n === 0) {
        return 0;
      }
      if (n === 1) {
        dp[n] = 1;
        return dp[n];
      }
      if (dp[n] !== 0) return dp[n];
      dp[n] = fibo(n - 1) + fibo(n - 2);
      return dp[n];
    }

    if (n === 0) {
      console.log(1 + ' ' + 0);
    } else {
      fibo(n);
      console.log(dp[n - 1] + ' ' + dp[n]);
    }
  }
};

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
