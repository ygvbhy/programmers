let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let max = 0;
let index;
for (let i = 0; i < 9; i++) {
  if (max < Number(input[i])) {
    max = Number(input[i]);
    index = i;
  }
}
console.log(max);
console.log(index + 1);

// or

let data = input.map((x) => Number(x));
let max1 = Math.max(...data);

console.log(max1);
console.log(data.indexOf(max1) + 1);
