const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = Number(input[0]);
  const arr = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) arr[i] = Number(input[i]);

  let visited = new Array(n + 1).fill(false);
  let finished = new Array(n + 1).fill(false);

  let result = [];
  const dfs = (x) => {
    visited[x] = true;
    let y = arr[x];
    if (!visited[y]) {
      dfs(y);
    } else if (!finished[y]) {
      while (x !== y) {
        result.push(y);
        y = arr[y];
      }
      result.push(x);
    }
    finished[x] = true;
  };

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) dfs(i);
  }

  console.log(result.length);
  result.sort((a, b) => a - b);
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
