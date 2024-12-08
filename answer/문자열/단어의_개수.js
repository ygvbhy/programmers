let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let s = input[0].trim().split(" ");

if (s == "") console.log(0);
else console.log(s.length);
