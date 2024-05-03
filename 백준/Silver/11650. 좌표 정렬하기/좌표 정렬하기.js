const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const arr = [];
  const n = Number(input[0]);
  for (let i = 1; i <= n; i++) {
    const x = Number(input[i].split(' ')[0]);
    const y = Number(input[i].split(' ')[1]);
    arr.push([x, y]);
  }
  arr.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    } else {
      if (a[1] > b[1]) {
        return 1;
      } else if (a[1] < b[1]) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  let answer = '';
  arr.forEach((v) => {
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
