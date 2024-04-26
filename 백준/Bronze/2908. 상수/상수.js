const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (a, b) => {
  const reverseA = a.split("").reverse().join("");
  const reverseB = b.split("").reverse().join("");
  console.log(reverseA > reverseB ? reverseA : reverseB);
};

rl.on("line", function (line) {
  const [a, b] = line.split(" ");
  solution(a, b);
  rl.close();
}).on("close", function () {
  process.exit();
});
