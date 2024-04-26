const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const n = Number(input[0]);
  let count = 0;
  for (let i = 1; i <= n; i++) {
    const s = input[i];
    let arr = [];
    let check = true;
    for (let j = 0; j < s.length; j++) {
      if (arr.includes(s[j])) check = false;
      while (s[j] === s[j + 1]) {
        j++;
      }
      arr.push(s[j]);
    }
    if (check) count++;
  }
  console.log(count);
};

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
