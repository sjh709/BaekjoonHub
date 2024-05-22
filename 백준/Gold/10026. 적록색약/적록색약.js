const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const dfs = (arr, visited, n, x, y, color) => {
  visited[x][y] = true;
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
    if (arr[nx][ny] !== color) continue;
    if (visited[nx][ny]) continue;
    dfs(arr, visited, n, nx, ny, color);
  }
};

const solution = (input) => {
  const n = Number(input[0]);
  let arr = [];
  let visited = Array.from({ length: n }, () => new Array(n).fill(false));
  let answer = [0, 0];
  for (let i = 1; i <= n; i++) {
    arr.push(input[i].split(''));
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        answer[0] += 1;
        dfs(arr, visited, n, i, j, arr[i][j]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      visited[i][j] = false;
      if (arr[i][j] === 'G') arr[i][j] = 'R';
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        answer[1] += 1;
        dfs(arr, visited, n, i, j, arr[i][j]);
      }
    }
  }

  console.log(answer.join(' '));
};

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
