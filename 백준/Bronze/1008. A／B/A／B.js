const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  let [a, b] = line.split(' ').map(Number);
  console.log(a / b);
  rl.close();
});
