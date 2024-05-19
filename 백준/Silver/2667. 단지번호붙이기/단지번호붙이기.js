const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = Number(input[0]);
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(input[i].split('').map(Number));
  }

  let visited = new Array(n);
  for (let i = 0; i < n; i++) visited[i] = new Array(n).fill(false);

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let cnt = 1;
  let answer = 0;
  const dfs = (x, y) => {
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (visited[nx][ny]) continue;
      if (arr[nx][ny] === 0) continue;
      cnt += 1;
      dfs(nx, ny);
    }
  };

  let result = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && arr[i][j] === 1) {
        cnt = 1;
        dfs(i, j);
        result.push(cnt);
        answer += 1;
      }
    }
  }

  result.sort((a, b) => a - b);

  console.log(answer);
  for (let x of result) {
    console.log(x);
  }
};

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
