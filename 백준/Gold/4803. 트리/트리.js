const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  let line = 0;
  let idx = 1;
  while (true) {
    const [n, m] = input[line].split(' ').map(Number);
    if (n === 0 && m === 0) break;

    let graph = [];
    for (let i = 1; i <= n; i++) graph[i] = [];
    let visited = new Array(n + 1).fill(false);

    for (let i = 1; i <= m; i++) {
      const [x, y] = input[line + i].split(' ').map(Number);
      graph[x].push(y);
      graph[y].push(x);
    }

    const isCycle = (x, prev) => {
      visited[x] = true;
      for (let y of graph[x]) {
        if (!visited[y]) {
          if (isCycle(y, x)) return true;
        } else if (y !== prev) return true;
      }
      return false;
    };

    let cnt = 0;
    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        if (!isCycle(i, 0)) cnt++;
      }
    }

    if (cnt === 0) {
      console.log('Case ' + idx + ': No trees.');
    } else if (cnt === 1) {
      console.log('Case ' + idx + ': There is one tree.');
    } else {
      console.log('Case ' + idx + ': A forest of ' + cnt + ' trees.');
    }

    idx += 1;
    line += m + 1;
  }
};

solution(input);
