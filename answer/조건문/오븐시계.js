let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let c = Number(input[1]);

let z = a * 60 + b + c;
let x;
if (z / 60 >= 24) {
  x = parseInt(z / 60) - 24;
} else x = parseInt(z / 60);
let v = z % 60;

console.log(x + " " + v);
