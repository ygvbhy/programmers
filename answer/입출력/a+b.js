const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// ["1", "2"]
let line = input[0].split(" ");

let a = parseInt(line[0]);
let b = parseInt(line[1]);

console.log(a + b);
