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
  const [n, k] = input[0].split(' ').map(Number);

  const MAX = 100001;
  let visited = new Array(MAX).fill(0);
  const bfs = () => {
    let queue = new Queue();
    queue.enqueue(n);
    while (queue.getLength !== 0) {
      let cur = queue.dequeue();
      if (cur === k) {
        return visited[cur];
      }
      for (let next of [cur - 1, cur + 1, cur * 2]) {
        if (next < 0 || next >= MAX) continue;
        if (visited[next] === 0) {
          visited[next] = visited[cur] + 1;
          queue.enqueue(next);
        }
      }
    }
  };

  console.log(bfs());
};

solution(input);
