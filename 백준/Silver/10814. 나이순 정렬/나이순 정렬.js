const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = Number(input[0]);
  const data = [];
  for (let i = 1; i <= n; i++) {
    const a = Number(input[i].split(' ')[0]);
    const b = input[i].split(' ')[1];
    data.push([a, b]);
  }
  data.sort((a, b) => a[0] - b[0]);

  let answer = '';
  data.forEach((v) => {
    answer += v[0] + ' ' + v[1] + '\n';
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
