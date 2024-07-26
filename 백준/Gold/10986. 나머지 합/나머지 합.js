const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [n, m] = input[0].split(' ').map(Number);
  const arr = [0, ...input[1].split(' ').map(Number)];
  const sum = [0];
  for (let i = 0; i < n; i++) {
    sum.push(sum[i] + arr[i + 1]);
  }

  const processed = [];
  let counter = {};
  for (let i = 0; i <= n; i++) {
    processed[i] = sum[i] % m;
    if (processed[i] in counter) {
      counter[processed[i]] += 1;
    } else {
      counter[processed[i]] = 1;
    }
  }

  let result = 0;
  for (let i = 0; i < m; i++) {
    if (i in counter) result += parseInt((counter[i] * (counter[i] - 1)) / 2);
  }

  console.log(result);

  process.exit();
});
