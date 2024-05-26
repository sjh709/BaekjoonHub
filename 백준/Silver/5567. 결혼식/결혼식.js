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

const solution = (input) => {
  let n = Number(input[0]);
  let m = Number(input[1]);
  let graph = [];
  for (let i = 1; i <= n; i++) graph[i] = [];
  for (let i = 2; i < m + 2; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  let visited = new Set([1]);
  let queue = new Queue();
  queue.enqueue([1, 0]);
  let count = 0;
  let check = false;
  while (queue.getLength() !== 0) {
    let [x, dist] = queue.dequeue();
    if (dist === 2) {
      console.log(count);
      check = true;
      break;
    }
    for (let y of graph[x]) {
      if (!visited.has(y)) {
        queue.enqueue([y, dist + 1]);
        visited.add(y);
        count++;
      }
    }
  }
  if (!check) console.log(0);
};

solution(input);
