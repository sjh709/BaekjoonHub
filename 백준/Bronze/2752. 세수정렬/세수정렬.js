const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input[0].split(' ');
arr.sort((a, b) => a - b);
console.log(arr[0], arr[1], arr[2]);
