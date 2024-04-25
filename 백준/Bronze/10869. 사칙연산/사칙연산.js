const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const input = line.split(" ");
  const a = Number(input[0]);
  const b = Number(input[1]);
  let result = "";

  result += a + b + "\n";
  result += a - b + "\n";
  result += a * b + "\n";
  result += parseInt(a / b) + "\n";
  result += (a % b) + "\n";

  console.log(result);
  rl.close();
}).on("close", function () {
  process.exit();
});
