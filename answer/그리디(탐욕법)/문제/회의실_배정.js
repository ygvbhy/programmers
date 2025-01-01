let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]); // 회의의 개수
let arr = []; // 각 회의에 대한 시작시간, 종료시간 저장 배열
for (let i = 1; i <= n; i++) arr.push(input[i].split(" ").map(Number));

arr.sort((a, b) => {
  // 종료시점, 시작시점 기준으로 정렬
  if (a[1] != b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

// 첫번째 회의 부터 시작
let count = 1;
let cur = 0;
for (let i = 1; i < n; i++) {
  if (arr[cur][1] <= arr[i][0]) {
    // 회의가 끝난 이후에 시작되는 경우 카운트
    count += 1;
    cur = i;
  }
}

console.log(count);
