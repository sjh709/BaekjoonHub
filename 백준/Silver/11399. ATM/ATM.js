const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = Number(input[0]);
  const arr = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i] * (n - i);
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
