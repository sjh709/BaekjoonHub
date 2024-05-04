const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (line) => {
  const answer = line
    .split('')
    .sort((a, b) => b - a)
    .join('');
  console.log(answer);
};

rl.on('line', function (line) {
  solution(line);
  rl.close();
}).on('close', function () {
  process.exit();
});
