const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (line) => {
  const answer = line
    .split('')
    .sort((a, b) => b - a)
    .join('');
  console.log(answer);
};

solution(input[0]);
