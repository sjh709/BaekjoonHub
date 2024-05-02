const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  input.shift();
  input.sort((a, b) => a - b);
  input.forEach((v) => console.log(v));
  process.exit();
});
