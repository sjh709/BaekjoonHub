const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [length, width, height] = input[0].split(' ').map(Number);
  const n = Number(input[1]);
  const cubes = [];
  for (let i = 2; i <= n + 1; i++) {
    const a = Number(input[i].split(' ')[0]);
    const b = Number(input[i].split(' ')[1]);
    cubes[a] = b;
  }

  let answer = 0;
  let used = 0;
  for (let i = cubes.length - 1; i >= 0; i--) {
    used *= 8;
    const cur = 2 ** i;
    // 채워야하는 박스 개수
    const box =
      parseInt(length / cur) * parseInt(width / cur) * parseInt(height / cur) -
      used;
    // 사용한 박스 개수
    const use = Math.min(cubes[i], box);

    answer += use;
    used += use;
  }

  if (used === length * width * height) console.log(answer);
  else console.log(-1);
};

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
