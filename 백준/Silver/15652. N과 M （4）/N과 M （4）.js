const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const [n, m] = input[0].split(' ').map(Number);
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  let selected = [];

  let answer = '';
  const dfs = (arr, depth) => {
    if (depth === m) {
      for (let x of selected) answer += x + ' ';
      answer += '\n';
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (selected[selected.length - 1] > arr[i]) continue;
      selected.push(arr[i]);
      dfs(arr, depth + 1);
      selected.pop();
    }
  };

  dfs(arr, 0);

  console.log(answer);
};

solution(input);
