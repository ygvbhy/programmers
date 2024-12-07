let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let a = "";
for (let i = 0; i < n; i++) {
  a += "*";
  console.log(a);
}
// or

let result = "";
for (let i = 0; i < n; i++) {
  // 층(행)만큼 반복
  for (let j = 0; j <= i; j++) {
    // 현재 행만큼 별을 출력
    result += "*";
  }
  result += "\n";
}
console.log(result);
