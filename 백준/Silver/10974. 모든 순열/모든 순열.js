const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (n) => {
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  let visited = Array(n).fill(false);
  let selected = [];

  let answer = '';
  const dfs = (arr, depth) => {
    if (depth === n) {
      for (let x of selected) {
        answer += x + ' ';
      }
      answer += '\n';
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue;
      selected.push(arr[i]);
      visited[i] = true;
      dfs(arr, depth + 1);
      selected.pop();
      visited[i] = false;
    }
  };

  dfs(arr, 0);

  console.log(answer);
};

rl.on('line', function (line) {
  solution(Number(line));
  rl.close();
}).on('close', function () {
  process.exit();
});
