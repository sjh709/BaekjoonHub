const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [n, m] = input[0].split(' ').map(Number);

  let arr = [];
  let answer = '';
  const dfs = (depth) => {
    if (depth === m) {
      for (let i = 0; i < arr.length; i++) {
        answer += arr[i] + ' ';
      }
      answer += '\n';
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (arr.includes(i)) continue;
      if (arr[arr.length - 1] > i) continue;
      arr.push(i);
      dfs(depth + 1);
      arr.pop();
    }
  };

  dfs(0);

  console.log(answer);
};

const input = [];
rl.on('line', function (line) {
  input.push(line);
  solution(input);
  rl.close();
}).on('close', function () {
  process.exit();
});
