const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const n = Number(input[0]);
  let graph = [];
  for (let i = 0; i <= n; i++) graph.push([0]);
  for (let i = 1; i <= n; i++) {
    const line = input[i].split(' ').map(Number);
    for (let j = 0; j < n; j++) graph[i].push(line[j]);
  }
  let visited = new Array(11).fill(false);
  let result = [];
  let minValue = 1e9;

  const dfs = (depth) => {
    if (depth === n - 1) {
      let totalCost = 0;
      let cur = 1;
      for (let i = 0; i < n - 1; i++) {
        let nextNode = result[i];
        let cost = graph[cur][nextNode];
        if (cost === 0) return;
        totalCost += cost;
        cur = nextNode;
      }
      let cost = graph[cur][1];
      if (cost === 0) return;
      totalCost += cost;
      minValue = Math.min(minValue, totalCost);
      return;
    }

    for (let i = 2; i <= n; i++) {
      if (visited[i]) continue;
      result.push(i);
      visited[i] = true;
      dfs(depth + 1);
      result.pop();
      visited[i] = false;
    }
  };

  dfs(0);

  console.log(minValue);
};

solution(input);
