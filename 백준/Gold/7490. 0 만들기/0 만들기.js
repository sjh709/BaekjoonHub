const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const t = Number(input[0]);
  const arr = [' ', '+', '-'];

  for (let i = 1; i <= t; i++) {
    const n = Number(input[i]);

    let selected = [];
    const dfs = (depth) => {
      let answer = '';
      if (depth === n - 1) {
        for (let i = 0; i < n - 1; i++) {
          answer += i + 1;
          answer += selected[i];
        }
        answer += n;

        let number = '';
        let total = 0;
        let flag = '+';
        for (let i = 0; i < answer.length; i++) {
          if (answer[i] === '+' || answer[i] === '-') {
            if (flag === '+') {
              total += Number(number);
            } else if (flag === '-') {
              total -= Number(number);
            }
            flag = answer[i];
            number = '';
          } else if (answer[i] === ' ') {
            continue;
          } else {
            number += answer[i];
          }
        }

        if (flag === '+') {
          total += Number(number);
        } else if (flag === '-') {
          total -= Number(number);
        }

        if (total === 0) {
          console.log(answer);
        }

        return;
      }

      for (let i = 0; i < arr.length; i++) {
        selected.push(arr[i]);
        dfs(depth + 1);
        selected.pop();
      }
    };

    dfs(0);

    console.log();
  }
};

solution(input);
