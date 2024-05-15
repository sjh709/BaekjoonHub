const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const n = Number(input[0]);
  const dist = [];
  const city = [];
  const visited = new Array(n).fill(false);
  for (let i = 1; i <= n; i++) {
    city.push(i);
    dist.push(input[i].split(' ').map(Number));
  }

  let answer = Number.MAX_SAFE_INTEGER;
  const solve = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) {
        if (dist[arr[i] - 1][arr[0] - 1] === 0) return;
        sum += dist[arr[i] - 1][arr[0] - 1];
      } else {
        if (dist[arr[i] - 1][arr[i + 1] - 1] === 0) return;
        sum += dist[arr[i] - 1][arr[i + 1] - 1];
      }
    }
    answer = Math.min(answer, sum);
  };

  let selected = [];
  const dfs = (depth) => {
    if (depth === n) {
      solve(selected);
      return;
    }

    for (let i = 0; i < city.length; i++) {
      if (visited[i]) continue;
      selected.push(city[i]);
      visited[i] = true;
      dfs(depth + 1);
      selected.pop();
      visited[i] = false;
    }
  };

  dfs(0);

  console.log(answer);
};

solution(input);
