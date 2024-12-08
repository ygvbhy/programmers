let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let minValue = 1000001;
let maxValue = -1000001;
for (let i = 0; i < n; i++) {
  if (minValue > arr[i]) minValue = arr[i];
  if (maxValue < arr[i]) maxValue = arr[i];
}
console.log(minValue, maxValue);

// or

let n1 = Number(input[0]);
let data = input[1].split(" ").map((x) => Number(x));

let min = data.reduce((a, b) => Math.min(a, b));
let max = data.reduce((a, b) => Math.max(a, b));

console.log(min, max);
