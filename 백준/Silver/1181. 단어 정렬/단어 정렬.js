const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = Number(input[0]);
  const data = [];
  for (let i = 1; i <= n; i++) {
    if (!data.includes(input[i])) {
      data.push(input[i]);
    }
  }

  data.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    else {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    }
  });

  let answer = '';
  for (let word of data) {
    answer += word + '\n';
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
