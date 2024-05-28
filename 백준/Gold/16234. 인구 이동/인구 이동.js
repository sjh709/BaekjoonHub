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

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, l, r] = input[0].split(' ').map(Number);
let graph = [];
for (let i = 1; i <= n; i++) {
  let row = input[i].split(' ').map(Number);
  graph.push(row);
}

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let totalCount = 0;

while (true) {
  let union = Array.from(Array(n), () => Array(n).fill(-1));
  let index = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (union[i][j] === -1) {
        bfs(i, j, index, union);
        index++;
      }
    }
  }
  if (index === n * n) break;
  totalCount += 1;
}
console.log(totalCount);

function bfs(x, y, index, union) {
  let united = [[x, y]];
  let queue = new Queue();
  queue.enqueue([x, y]);
  union[x][y] = index;
  let summary = graph[x][y];
  let cnt = 1;
  while (queue.getLength() !== 0) {
    let [x, y] = queue.dequeue();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (union[nx][ny] === -1) {
        let dif = Math.abs(graph[nx][ny] - graph[x][y]);
        if (l <= dif && dif <= r) {
          queue.enqueue([nx, ny]);
          union[nx][ny] = index;
          summary += graph[nx][ny];
          cnt += 1;
          united.push([nx, ny]);
        }
      }
    }
  }
  for (let unit of united) {
    let [i, j] = unit;
    graph[i][j] = parseInt(summary / cnt);
  }
}
