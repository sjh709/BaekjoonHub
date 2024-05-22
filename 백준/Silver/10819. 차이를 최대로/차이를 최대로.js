const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  let n = Number(input[0]);
  let arr = input[1].split(' ').map(Number);

  let selected = [];
  let visited = new Array(n).fill(false);
  let result = 0;
  const dfs = (depth) => {
    if (depth === n) {
      let sum = 0;
      for (let i = 0; i < selected.length - 1; i++) {
        sum += Math.abs(selected[i] - selected[i + 1]);
      }
      result = Math.max(result, sum);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue;
      selected.push(arr[i]);
      visited[i] = true;
      dfs(depth + 1);
      selected.pop();
      visited[i] = false;
    }
  };

  dfs(0);
  console.log(result);
};

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
