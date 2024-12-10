let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = input[0].split(" ").sort((a, b) => a - b);
console.log(`${arr[0]} ${arr[1]} ${arr[2]}`);

// 정렬 직접 구현
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
let input1 = fs.readFileSync("/dev/stdin").toString().split("\n");
let arr1 = input1[0].split(" ").map(Number);
selectionSort(arr1);
let answer = "";
for (let i = 0; i < arr1.length; i++) {
  answer += arr1[i] + " ";
}
console.log(answer);
