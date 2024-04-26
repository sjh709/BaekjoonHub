const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  let count = 0;
  for (let i = 1; i <= n; i++) {
    const s = input[i];
    let arr = [];
    let check = true;
    for (let j = 0; j < s.length; j++) {
      if (arr.includes(s[j])) check = false;
      while (s[j] === s[j + 1]) {
        j++;
      }
      arr.push(s[j]);
    }
    if (check) count++;
  }
  console.log(count);
};

solution(input);
