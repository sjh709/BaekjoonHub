const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const data = [];
  const n = Number(input[0]);
  for (let i = 1; i <= n; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    data.push([x, y]);
  }

  data.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  let answer = '';
  for (let point of data) {
    answer += point[0] + ' ' + point[1] + '\n';
  }

  console.log(answer);
};

solution(input);
