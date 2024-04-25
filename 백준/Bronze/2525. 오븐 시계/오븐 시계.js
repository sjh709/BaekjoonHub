const fs = require("fs");
const line = fs.readFileSync("/dev/stdin").toString().split("\n");

let h = Number(line[0].split(" ")[0]);
let m = Number(line[0].split(" ")[1]);
const time = Number(line[1]);

const totalTime = h * 60 + m + time;

h =
  parseInt(totalTime / 60) > 23
    ? parseInt(totalTime / 60) - 24
    : parseInt(totalTime / 60);
m = totalTime % 60;

console.log(h, m);
