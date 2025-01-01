let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 10억 이하의 피보나치 수열 계산
let pibo = [];
pibo.push(0);
pibo.push(1);
while (pibo[pibo.length - 1] < 1e9)
  pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);

let testCase = Number(input[0]);
for (let tc = 1; tc <= testCase; tc++) {
  let n = Number(input[tc]);
  let result = [];
  let i = pibo.length - 1; // 가장 큰 피보나치 수의 인덱스
  while (n > 0) {
    // n 의 값이 0이 될때 까지
    if (n >= pibo[i]) {
      // 가능한 큰 수의 피보나치부터 빼기
      n -= pibo[i];
      result.push(pibo[i]);
    }
    i--;
  }

  let answer = "";
  // 큰 수 부터 담았기 때문에 역순으로 출력
  for (let i = result.length - 1; i >= 0; i--) answer += result[i] + " ";
  console.log(answer);
}
