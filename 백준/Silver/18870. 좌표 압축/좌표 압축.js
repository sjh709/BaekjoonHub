const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = Number(input[0]);
  const data = input[1].split(' ').map(Number);
  const arr = [...new Set(data)].sort((a, b) => a - b);

  const map = new Map();
  arr.forEach((v, i) => {
    map.set(v, i);
  });

  let answer = '';
  data.forEach((v) => {
    answer += map.get(v) + ' ';
  });
  console.log(answer);
};

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
