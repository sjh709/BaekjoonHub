const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  let [n, k] = input[0].split(' ').map(Number);
  let sum = 0;
  for (let i = 1; i <= k; i++) {
    sum += i;
  }

  if (sum > n) {
    console.log(-1);
  } else {
    n -= sum;
    if (n % k === 0) {
      console.log(k - 1);
    } else {
      console.log(k);
    }
  }
};

const input = [];
rl.on('line', function (line) {
  input.push(line);
  solution(input);
  rl.close();
}).on('close', function () {
  process.exit();
});
