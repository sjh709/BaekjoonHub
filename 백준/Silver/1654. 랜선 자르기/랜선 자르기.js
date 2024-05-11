const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [k, n] = input[0].split(' ').map(Number);
  const arr = [];
  for (let i = 1; i <= k; i++) {
    arr.push(Number(input[i]));
  }

  let start = 1;
  let end = Math.max(...arr);

  let result = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    for (let x of arr) {
      total += parseInt(x / mid);
    }

    if (total >= n) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
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
