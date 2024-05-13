const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const [n, m] = input[0].split(' ').map(Number);
  const arr = [];
  let answer = '';

  const dfs = (cnt) => {
    if (cnt === m) {
      answer += arr.join(' ') + '\n';
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!arr.includes(i)) {
        arr.push(i);
        dfs(cnt + 1);
        arr.pop();
      }
    }
  };

  dfs(0);

  console.log(answer);
};

solution(input);
