let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = input[1].split("").reduce((a, b) => Number(a) + Number(b), 0);
console.log(n);

let n1 = Number(input[0]);
let string = input[1];
let answer = 0;
// 문자열에 포함된 문자를 하나씩 확인하며
for (let x of string) {
  // 모든 숫자를 더하기
  answer += Number(x);
}
console.log(answer);
