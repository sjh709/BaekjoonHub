const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const k = Number(input[0]);
  const arr = input[1].split(' ');

  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;

  let selected = [];
  let visited = new Array(10).fill(false);
  const dfs = (depth) => {
    if (depth === k + 1) {
      let flag = true;
      for (let i = 0; i < k; i++) {
        if (arr[i] === '<') {
          if (selected[i] >= selected[i + 1]) {
            flag = false;
            break;
          }
        } else {
          if (selected[i] <= selected[i + 1]) {
            flag = false;
            break;
          }
        }
      }

      if (flag) {
        const result = Number(selected.join(''));
        min = Math.min(min, result);
        max = Math.max(max, result);
      }

      return;
    }

    for (let i = 0; i < 10; i++) {
      if (visited[i]) continue;
      selected.push(i);
      visited[i] = true;
      dfs(depth + 1);
      selected.pop();
      visited[i] = false;
    }
  };

  dfs(0);

  console.log(max);
  console.log(
    String(min).length < k + 1
      ? '0'.repeat(k + 1 - String(min).length) + min
      : min
  );
};

solution(input);
