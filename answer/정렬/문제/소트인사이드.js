let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = input[0]
  .split("")
  .sort((a, b) => Number(b) - Number(a))
  .join("");

console.log(arr);
