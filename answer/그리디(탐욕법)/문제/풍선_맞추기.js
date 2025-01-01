let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let data = input[1].split(" ").map(Number);

let result = 0;
let arrow = new Array(1000001).fill(0); // 각 높이에 화살 개수
for (let x of data) {
  if (arrow[x] > 0) {
    // 해당 높이에 화살이 있다면
    arrow[x] -= 1;
    arrow[x - 1] += 1;
  } else {
    // 해당 높이에 화살이 없다면
    arrow[x - 1] += 1;
    result += 1; // 화살 쏘기
  }
}

console.log(result);
