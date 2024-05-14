const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const [n, m] = input[0].split(' ').map(Number);

  let arr = [];
  let answer = '';
  const dfs = (depth) => {
    if (depth === m) {
      for (let i = 0; i < arr.length; i++) {
        answer += arr[i] + ' ';
      }
      answer += '\n';
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (arr.includes(i)) continue;
      if (arr[arr.length - 1] > i) continue;
      arr.push(i);
      dfs(depth + 1);
      arr.pop();
    }
  };

  dfs(0);

  console.log(answer);
};

solution(input);
