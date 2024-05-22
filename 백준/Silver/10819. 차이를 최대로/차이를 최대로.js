const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

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

solution(input);
