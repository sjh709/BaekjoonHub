const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

const solution = (input) => {
  const t = Number(input[0]);
  let line = 1;
  for (let i = 0; i < t; i++) {
    const n = Number(input[i + line]);
    const [x, y] = input[i + line + 1].split(' ').map(Number);
    const [rx, ry] = input[i + line + 2].split(' ').map(Number);

    let arr = [];
    for (let i = 0; i < n; i++) arr[i] = new Array(n).fill(0);

    const dx = [-1, -2, -2, -1, +1, +2, +2, +1];
    const dy = [-2, -1, +1, +2, +2, +1, -1, -2];
    const bfs = (arr, x, y) => {
      let queue = new Queue();
      queue.enqueue([x, y]);
      while (queue.getLength() !== 0) {
        let [cx, cy] = queue.dequeue();
        if (cx === rx && cy === ry) return arr[cx][cy];
        for (let i = 0; i < 8; i++) {
          let nx = cx + dx[i];
          let ny = cy + dy[i];
          if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
          if (arr[nx][ny] === 0) {
            arr[nx][ny] = arr[cx][cy] + 1;
            queue.enqueue([nx, ny]);
          }
        }
      }
    };

    const result = bfs(arr, x, y);
    console.log(result);

    line += 2;
  }
};

solution(input);
