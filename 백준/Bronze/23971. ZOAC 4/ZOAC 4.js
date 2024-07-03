const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const [h, w, n, m] = line.split(' ').map(Number);
  let count = 0;
  count += Math.ceil(h / (n + 1));
  count *= Math.ceil(w / (m + 1));
  console.log(count);
  rl.close();
});
