const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const n = Number(input[0]);
  const sb = [[0, 0]];
  for (let i = 1; i <= n; i++) {
    sb.push(input[i].split(' ').map(Number));
  }

  const arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);

  let result = [];
  let visited = new Array(n + 1).fill(false);

  let answer = 1e9;
  const dfs = (depth, start) => {
    if (depth >= 1) {
      let [s, b] = [1, 0];
      for (let x of result) {
        s *= sb[x][0];
        b += sb[x][1];
      }
      answer = Math.min(answer, Math.abs(s - b));
    }

    for (let i = start; i < arr.length; i++) {
      if (visited[i]) continue;
      result.push(arr[i]);
      visited[i] = true;
      dfs(depth + 1, i + 1);
      result.pop();
      visited[i] = false;
    }
  };

  dfs(0, 0);

  console.log(answer);
};

solution(input);
