let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

let answer = 0;
let count = 0;
for (let i = 0; i < arr.length; i++) {
  count += arr[i];
  answer += count;
}
console.log(answer);
