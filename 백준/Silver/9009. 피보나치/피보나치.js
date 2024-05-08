const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const t = Number(input[0]);
  let answer = '';
  for (let i = 1; i <= t; i++) {
    let n = Number(input[i]);
    const fibo = [0, 1];

    for (let i = 2; fibo[i - 1] <= n; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    let result = [];
    for (let i = fibo.length - 1; i >= 0; i--) {
      if (n === 0) break;
      if (fibo[i] <= n) {
        result.push(fibo[i]);
        n -= fibo[i];
      }
    }
    while (result.length) {
      answer += result.pop() + ' ';
    }
    answer += '\n';
  }
  console.log(answer);
};

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
