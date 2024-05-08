const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = Number(input[0]);
  const data = input[1].split(' ').map(Number);
  const arr = new Array(1000001).fill(0);
  let result = 0;
  for (let x of data) {
    if (arr[x] > 0) {
      arr[x] -= 1;
      arr[x - 1] += 1;
    } else {
      arr[x - 1] += 1;
      result += 1;
    }
  }
  console.log(result);
};

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
