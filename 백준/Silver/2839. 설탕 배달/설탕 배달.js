const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (n) => {
  let answer = n;
  for (let i = 0; 5 * i <= n; i++) {
    const a = 5 * i;
    const b = n - a;
    if (b % 3 === 0) {
      const result = i + b / 3;
      answer = Math.min(answer, result);
    }
  }

  console.log(answer === n ? -1 : answer);
};

rl.on('line', function (line) {
  const n = Number(line);
  solution(n);
  rl.close();
}).on('close', function () {
  process.exit();
});
