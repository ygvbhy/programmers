const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let score = parseInt(input[0]);

if (score >= 90) {
  console.log("A");
} else if (score <= 89 && score >= 80) {
  console.log("B");
} else if (score <= 79 && score >= 70) {
  console.log("C");
} else if (score <= 69 && score >= 60) {
  console.log("D");
} else console.log("F");
