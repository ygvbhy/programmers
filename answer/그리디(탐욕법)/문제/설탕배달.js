let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

// 최대한 5로 나누어 떨어지게끔 유도

let count = 0;
let flag = false;
while (n >= 0) {
  // 더 이상 반복할 수 없을때 까지 반복
  if (n % 5 === 0 || n == 0) {
    // n 이 0 이거나 5로 나누어 떨어진 값인 경우
    count += parseInt(n / 5);
    console.log(count);
    flag = true;
    break;
  }
  // 그렇지 않다면 3씩 빼주고 반복
  n -= 3;
  // 3을 뺏으니 카운트 1 씩 증가
  count++;
}

// flag 값이 false 라면 5로 나누어 떨어지지 않았으므로 계산 불가
if (!flag) console.log(-1);
