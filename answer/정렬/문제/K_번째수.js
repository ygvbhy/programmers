let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let k = Number(input[0].split(" ")[1]);
let arr = input[1].split(" ").sort((a, b) => a - b);
console.log(arr[k - 1]);
