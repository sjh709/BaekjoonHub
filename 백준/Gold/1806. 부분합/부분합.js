const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [n, s] = input[0].split(' ').map(Number);
  const arr = input[1].split(' ').map(Number);

  let result = 1e9;
  let start = 0;
  let end = 0;
  let summary = arr[0];

  while (true) {
    while (end < n - 1 && summary < s) {
      end += 1;
      summary += arr[end];
    }
    if (summary >= s) {
      result = Math.min(result, end - start + 1);
    }
    summary -= arr[start];
    start += 1;
    if (start >= n) break;
  }
  if (result === 1e9) result = 0;
  console.log(result);

  process.exit();
});
