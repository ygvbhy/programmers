let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 뺄셈 연산자를 기준으로 나누어 여러 그룹 만들기
let a = input[0].split("-");
let answer = 0;
for (let i = 0; i < a.length; i++) {
  // 각 그룹 내부에서 덧셈 연산 적용
  let cur = a[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);
  // + 를 기준으로 나누고 map 으로 숫자로 만든 뒤 reduce 를 활용해 모든 값을 더해 준다.
  if (i == 0) answer += cur; // 첫 번째는 항상 덧셈
  else answer -= cur; // 이후 뺄셈
}
console.log(answer);
