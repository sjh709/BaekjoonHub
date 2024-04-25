const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let h = Number(input[0].split(" ")[0]);
  let m = Number(input[0].split(" ")[1]);
  const time = Number(input[1]);

  const totalTime = h * 60 + m + time;

  h =
    parseInt(totalTime / 60) > 23
      ? parseInt(totalTime / 60) - 24
      : parseInt(totalTime / 60);
  m = totalTime % 60;

  console.log(h, m);

  process.exit();
});
