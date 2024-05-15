const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  let answer = '';
  input.forEach((v) => {
    const arr = v.split(' ').map(Number);
    const k = arr.shift();

    let result = [];
    let visited = new Array(k).fill(false);
    const dfs = (depth, start) => {
      if (depth === 6) {
        for (let x of result) {
          answer += x + ' ';
        }
        answer += '\n';
        return;
      }

      for (let i = start; i < arr.length; i++) {
        if (visited[i]) continue;
        result.push(arr[i]);
        visited[i] = true;
        dfs(depth + 1, i + 1);
        result.pop();
        visited[i] = false;
      }
    };

    dfs(0, 0);

    answer += '\n';
  });

  console.log(answer);
};

const input = [];
rl.on('line', function (line) {
  if (line === '0') rl.close();
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
