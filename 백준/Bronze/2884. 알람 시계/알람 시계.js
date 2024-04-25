const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const check = (input) => {
  let h = Number(input[0]);
  let m = Number(input[1]);

  if (m < 45) {
    m += 15;
    h -= 1;
    if (h < 0) {
      h += 24;
    }
  } else {
    m -= 45;
  }

  console.log(h, m);
};

rl.on("line", function (line) {
  const input = line.split(" ");
  check(input);
}).on("close", function () {
  process.exit();
});
