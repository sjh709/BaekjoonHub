const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const arr = input[0].split('-');
  let answer = 0;
  arr.forEach((v, i) => {
    const num = v
      .split('+')
      .map(Number)
      .reduce((acc, curr) => acc + curr, 0);
    i === 0 ? (answer += num) : (answer -= num);
  });
  console.log(answer);
};

const input = [];
rl.on('line', function (line) {
  input.push(line);
  rl.close();
}).on('close', function () {
  solution(input);
  process.exit();
});
