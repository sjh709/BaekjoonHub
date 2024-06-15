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

function dijkstra(start) {
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

let graph = [];
for (let i = 0; i <= n + 1; i++) graph.push([]);

for (let i = 1; i <= m; i++) {
  let [a, b, c] = input[i].split(' ').map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}
let [a, b] = input[m + 1].split(' ').map(Number);

let distance = new Array(n + 1).fill(INF);
dijkstra(1);
let distance_1_to_a = distance[a];
let distance_1_to_b = distance[b];

distance = new Array(n + 1).fill(INF);
dijkstra(a);
let distance_a_to_b = distance[b];
let distance_a_to_n = distance[n];

distance = new Array(n + 1).fill(INF);
dijkstra(b);
let distance_b_to_a = distance[a];
let distance_b_to_n = distance[n];

let route1 = distance_1_to_a + distance_a_to_b + distance_b_to_n;
let route2 = distance_1_to_b + distance_b_to_a + distance_a_to_n;

let result = Math.min(route1, route2);
if (result >= INF) console.log(-1);
else console.log(result);
