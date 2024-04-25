const fs = require("fs");
const line = fs.readFileSync("/dev/stdin").toString().split("\n");

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

const input = line[0].split(" ");
check(input);
