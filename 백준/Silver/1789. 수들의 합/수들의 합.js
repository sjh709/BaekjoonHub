const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (s) => {
  let sum = 0;
  let cnt = 0;
  while (sum <= s) {
    sum += ++cnt;
  }
  console.log(cnt - 1);
};

rl.on('line', function (line) {
  const s = Number(line);
  solution(s);
}).on('close', function () {
  process.exit();
});
