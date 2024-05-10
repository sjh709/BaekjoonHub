const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const palindrome = (s) => {
  return s === s.split('').reverse().join('');
};

const solution = (input) => {
  const t = Number(input[0]);
  for (let i = 1; i <= t; i++) {
    let s = input[i];
    if (palindrome(s)) {
      console.log(0);
    } else {
      const len = s.length;
      for (let i = 0; i < parseInt(len / 2); i++) {
        if (s[i] !== s[len - i - 1]) {
          const s1 = s.slice(0, i) + s.slice(i + 1, len);
          const s2 = s.slice(0, len - i - 1) + s.slice(len - i, len);
          if (palindrome(s1) || palindrome(s2)) {
            console.log(1);
          } else {
            console.log(2);
          }
          break;
        }
      }
    }
  }
};

solution(input);
