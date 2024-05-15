const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = Number(input[0]);
  const sb = [[0, 0]];
  for (let i = 1; i <= n; i++) {
    sb.push(input[i].split(' ').map(Number));
  }

  const arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);

  let result = [];
  let visited = new Array(n + 1).fill(false);

  let answer = 1e9;
  const dfs = (m, depth, start) => {
    if (m === depth) {
      let [s, b] = [1, 0];
      for (let x of result) {
        s *= sb[x][0];
        b += sb[x][1];
      }
      answer = Math.min(answer, Math.abs(s - b));
      return;
    }

    for (let i = start; i < arr.length; i++) {
      if (visited[i]) continue;
      result.push(arr[i]);
      visited[i] = true;
      dfs(m, depth + 1, i + 1);
      result.pop();
      visited[i] = false;
    }
  };

  for (let i = 1; i <= n; i++) {
    dfs(i, 0, 0);
  }

  console.log(answer);
};

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
