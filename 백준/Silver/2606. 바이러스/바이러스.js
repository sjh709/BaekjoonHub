const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = Number(input[0]);
  const m = Number(input[1]);
  const arr = Array.from({ length: n + 1 }, () => []);
  const visited = new Array(n + 1).fill(false);

  for (let i = 2; i < m + 2; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    arr[a].push(b);
    arr[b].push(a);
  }

  let cnt = 0;
  const dfs = (arr, v, visited) => {
    visited[v] = true;
    cnt += 1;
    for (let i of arr[v]) {
      if (!visited[i]) {
        dfs(arr, i, visited);
      }
    }
  };

  dfs(arr, 1, visited);

  console.log(cnt - 1);
};

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
