const fs = require("fs");
const line = fs.readFileSync("/dev/stdin").toString().split("\n");

const input = line.map(Number);

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

solution(input);
