const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

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

solution(input);
