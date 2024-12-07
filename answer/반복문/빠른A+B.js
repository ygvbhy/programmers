let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let answer = "";
for (let i = 1; i <= n; i++) {
  let a = input[i].split(" ");
  let x = Number(a[0]);
  let y = Number(a[1]);
  answer += x + y + "\n";
}

console.log(answer);
