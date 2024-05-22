const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  let n = Number(input[0]);
  let arr = input[1].split(' ').map(Number);
  let temp = input[2].split(' ').map(Number);
  let flag = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < temp[i]; j++) {
      flag.push(i);
    }
  }

  let selected = [];
  let visited = new Array(n - 1).fill(false);
  let min = 1e9 + 1;
  let max = -(1e9 + 1);
  const dfs = (depth) => {
    if (depth === n - 1) {
      let result = arr[0];
      for (let i = 0; i < n - 1; i++) {
        switch (selected[i]) {
          case 0:
            result += arr[i + 1];
            break;
          case 1:
            result -= arr[i + 1];
            break;
          case 2:
            result *= arr[i + 1];
            break;
          case 3:
            result = parseInt(result / arr[i + 1]);
            break;
          default:
            break;
        }
      }

      min = Math.min(min, result);
      max = Math.max(max, result);
      return;
    }
    for (let i = 0; i < n - 1; i++) {
      if (visited[i]) continue;
      selected.push(flag[i]);
      visited[i] = true;
      dfs(depth + 1);
      selected.pop();
      visited[i] = false;
    }
  };

  dfs(0);
  console.log(max ? max : 0);
  console.log(min ? min : 0);
};

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
