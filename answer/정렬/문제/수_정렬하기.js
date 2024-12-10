// 일부 백준 코드의 문제에서 trim() 을 해줘야 정답 진행이 될 수 있으므로 유의 하여 풀기 바람
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
let s = input.sort((a, b) => a - b).join("\n");
console.log(s);

// or

// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  // 한 줄씩 입력받아 배열에 넣기
  arr.push(Number(input[i]));
}
arr.sort(function (a, b) {
  // 오름차순 정렬 수행
  return a - b;
});
let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + "\n";
}
console.log(answer);

// or

function selectionSort(arr) {
  // 선택 정렬 함수
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // 가장 작은 원소의 인덱스
    for (let j = i + 1; j < arr.length; j++)
      if (arr[minIndex] > arr[j]) minIndex = j;
    let temp = arr[i]; // 스와프(swap)
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}
selectionSort(arr);
let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + "\n";
}
console.log(answer);
