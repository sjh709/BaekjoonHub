class MinHeap {
  constructor() {
    this.heap = [null];
  }

  getMin() {
    return this.heap[1];
  }

  getSize() {
    return this.heap.length - 1;
  }

  isEmpty() {
    return this.heap.length < 2;
  }

  insert(node) {
    let current = this.heap.length;

    while (current > 1) {
      const parent = Math.floor(current / 2);
      if (this.heap[parent] > node) {
        this.heap[current] = this.heap[parent];
        current = parent;
      } else break;
    }

    this.heap[current] = node;
  }

  remove() {
    let min = this.heap[1];

    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      let current = 1;
      let leftChildIndex = current * 2;
      let rightChildIndex = current * 2 + 1;

      while (this.heap[leftChildIndex]) {
        let childIndexToCompare = leftChildIndex;
        if (
          this.heap[rightChildIndex] &&
          this.heap[rightChildIndex] < this.heap[childIndexToCompare]
        )
          childIndexToCompare = rightChildIndex;

        if (this.heap[current] > this.heap[childIndexToCompare]) {
          [this.heap[current], this.heap[childIndexToCompare]] = [
            this.heap[childIndexToCompare],
            this.heap[current],
          ];
          current = childIndexToCompare;
        } else break;

        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
      }
    } else if (this.heap.length === 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }

    return min;
  }
}

function dijkstra() {
  let pq = new MinHeap();
  pq.insert([0, start]);
  distance[start] = 0;
  while (pq.getSize() !== 0) {
    let [dist, now] = pq.remove();
    if (distance[now] < dist) continue;
    for (let i of graph[now]) {
      let cost = dist + i[1];
      if (cost < distance[i[0]]) {
        distance[i[0]] = cost;
        pq.insert([cost, i[0]]);
      }
    }
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const INF = 1e9;
let [n, m] = input[0].split(' ').map(Number);
let start = Number(input[1]);

let graph = [];
for (let i = 0; i <= n + 1; i++) graph.push([]);
for (let i = 2; i <= m + 1; i++) {
  let [a, b, c] = input[i].split(' ').map(Number);
  graph[a].push([b, c]);
}

let distance = new Array(n + 1).fill(INF);

dijkstra();

for (let i = 1; i <= n; i++) {
  if (distance[i] === INF) console.log('INF');
  else console.log(distance[i]);
}
