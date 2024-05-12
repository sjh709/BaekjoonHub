const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const n = Number(input[0]);
  const cards = input[1].split(' ').map(Number);
  const m = Number(input[2]);
  const arr = input[3].split(' ').map(Number);

  const map = new Map();
  cards.forEach((card) => {
    map.set(card, (map.get(card) || 0) + 1);
  });

  let result = '';
  for (let x of arr) {
    result += (map.get(x) || 0) + ' ';
  }

  console.log(result);
};

solution(input);
