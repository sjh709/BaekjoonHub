const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const arr = line.split(' ');
  arr.sort((a, b) => a - b);
  console.log(arr[0], arr[1], arr[2]);
}).on('close', function () {
  process.exit();
});
