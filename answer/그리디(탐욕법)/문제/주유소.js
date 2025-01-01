let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let km = input[1].split(" ").map(Number);
let cost = input[2].split(" ").map(Number);

// 주유 비용 배열의 값을 비오름차순이 되도록 변환
// 각 위치마다 최소 주유 가격을 찾아서 각 cost 에 저장
let minCost = cost[0];
for (let i = 0; i < cost.length; i++) {
  minCost = Math.min(minCost, cost[i]);
  cost[i] = minCost;
}

// 조건이 10억 이하의 값이므로 BigInt 사용
// 도로당 이동 비용의 합 계산
let answer = BigInt(0);
for (let i = 0; i < n - 1; i++) {
  answer += BigInt(km[i]) * BigInt(cost[i]);
}

console.log(String(answer));
