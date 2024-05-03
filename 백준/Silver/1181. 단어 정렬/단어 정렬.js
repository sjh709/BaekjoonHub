const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const n = Number(input[0]);
  let data = [];
  for (let i = 1; i <= n; i++) {
    data.push(input[i]);
  }
  data = [...new Set(data)];

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

solution(input);
