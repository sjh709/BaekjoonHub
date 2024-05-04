const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

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

solution(input);
