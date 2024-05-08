const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = Number(input[0]);
  const dist = input[1].split(' ').map(Number);
  const cost = input[2].split(' ').map(Number);

  let minCost = cost[0];
  for (let i = 0; i < n; i++) {
    minCost = Math.min(minCost, cost[i]);
    cost[i] = minCost;
  }

  let answer = BigInt(0);
  for (let i = 0; i < n - 1; i++) {
    answer += BigInt(cost[i]) * BigInt(dist[i]);
  }
  console.log(String(answer));
};

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
