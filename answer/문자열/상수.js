let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = Number(input[0].split(" ")[0].split("").reverse().join(""));
let b = Number(input[0].split(" ")[1].split("").reverse().join(""));

console.log(Math.max(a, b));

// or

let a1 = input[0].split(" ")[0];
let b1 = input[0].split(" ")[1];
let newA = a1[2] + a1[1] + a1[0];
let newB = b1[2] + b1[1] + b1[0];
console.log(Math.max(Number(newA), Number(newB)));
