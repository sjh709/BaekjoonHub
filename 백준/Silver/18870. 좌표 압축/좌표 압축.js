const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

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

solution(input);
