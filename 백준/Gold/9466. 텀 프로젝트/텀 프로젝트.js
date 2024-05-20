const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const t = Number(input[0]);
  let line = 1;
  for (let i = 0; i < t; i++) {
    const n = Number(input[line + i]);
    const graph = [0, ...input[line + i + 1].split(' ').map(Number)];

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

    line += 1;
  }
};

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
