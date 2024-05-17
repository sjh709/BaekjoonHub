const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const n = Number(input[0]);
  let queens = [];

  const possible = (x, y) => {
    for (let [a, b] of queens) {
      if (a === x || b === y) return false;
      if (Math.abs(a - x) === Math.abs(b - y)) return false;
    }
    return true;
  };

  let cnt = 0;
  const dfs = (row) => {
    if (row === n) {
      cnt += 1;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!possible(row, i)) continue;
      queens.push([row, i]);
      dfs(row + 1);
      queens.pop();
    }
  };

  dfs(0);

  console.log(cnt);
};

solution(input);
