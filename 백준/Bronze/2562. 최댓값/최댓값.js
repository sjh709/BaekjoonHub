const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  let minValue = 0;
  let minIndex = 0;
  let result = "";
  for (let i = 0; i < input.length; i++) {
    if (minValue < input[i]) {
      minValue = input[i];
      minIndex = i + 1;
    }
  }

  result += minValue + "\n";
  result += minIndex;

  console.log(result);
};

let input = [];
rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  solution(input);
  process.exit();
});
