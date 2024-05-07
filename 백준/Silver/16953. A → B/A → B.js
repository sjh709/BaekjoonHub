const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (a, b) => {
  let cnt = 0;

  while (a < b) {
    if (b % 2 === 0) {
      b /= 2;
    } else if (b % 10 === 1) {
      b = parseInt(b / 10);
    } else {
      break;
    }
    cnt++;
  }

  console.log(a === b ? cnt + 1 : -1);
};

rl.on('line', function (line) {
  const [a, b] = line.split(' ').map(Number);
  solution(a, b);
  rl.close();
}).on('close', function () {
  process.exit();
});
