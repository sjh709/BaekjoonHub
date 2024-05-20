const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  let t = Number(input[0]);
  let line = 1;
  while (t--) {
    const n = Number(input[line]);
    const graph = [0, ...input[line + 1].split(' ').map(Number)];

    let visited = new Array(n + 1).fill(false);
    let finished = new Array(n + 1).fill(false);

    let result = [];
    const dfs = (x) => {
      visited[x] = true;
      let y = graph[x];

      if (!visited[y]) {
        dfs(y);
      } else if (!finished[y]) {
        while (x !== y) {
          result.push(y);
          y = graph[y];
        }
        result.push(x);
      }
      finished[x] = true;
    };

    for (let i = 1; i <= n; i++) {
      dfs(i);
    }
    console.log(n - result.length);

    line += 2;
  }
};

solution(input);
