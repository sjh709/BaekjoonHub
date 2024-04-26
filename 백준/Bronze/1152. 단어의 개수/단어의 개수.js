const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let result = 0;
  if (line.trim().length !== 0) {
    result = line.trim().split(" ").length;
  }
  console.log(result);
  rl.close();
}).on("close", function () {
  process.exit();
});
