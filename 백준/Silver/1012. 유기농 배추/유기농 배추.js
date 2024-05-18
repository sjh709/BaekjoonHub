const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const t = Number(input[0]);
  let line = 1;
  for (let i = 0; i < t; i++) {
    const [m, n, k] = input[line].split(' ').map(Number);
    const graph = Array.from({ length: n }, () => new Array(m).fill(0));
    const visited = Array.from({ length: n }, () => new Array(m).fill(false));
    for (let j = line + 1; j <= line + k; j++) {
      const [x, y] = input[j].split(' ').map(Number);
      graph[y][x] = 1;
    }

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const dfs = (graph, x, y, visited) => {
      visited[x][y] = true;
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
        if (visited[nx][ny]) continue;
        if (graph[nx][ny] === 0) continue;
        dfs(graph, nx, ny, visited);
      }
    };

    let cnt = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (!visited[i][j] && graph[i][j] === 1) {
          dfs(graph, i, j, visited);
          cnt += 1;
        }
      }
    }

    console.log(cnt);

    line += k + 1;
  }
};

solution(input);
