const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const [r, c] = input[0].split(' ').map(Number);
  const board = [];
  for (let i = 1; i <= r; i++) {
    board.push(input[i].split(''));
  }

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let visited = new Set();
  let maxDepth = 0;
  const dfs = (depth, x, y) => {
    maxDepth = Math.max(maxDepth, depth);
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
      if (visited.has(board[nx][ny])) continue;
      visited.add(board[nx][ny]);
      dfs(depth + 1, nx, ny);
      visited.delete(board[nx][ny]);
    }
  };

  visited.add(board[0][0]);
  dfs(1, 0, 0);

  console.log(maxDepth);
};

solution(input);
