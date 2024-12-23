let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}
// 중복 제거
arr = [...new Set(arr)];

arr.sort((a, b) => {
  if (a.length != b.length) return a.length - b.length;
  // 길이가 같으면 사전순으로 정렬
  else return a.localeCompare(b);
});

// 출력
for (let item of arr) {
  console.log(item);
}

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
// localeCompare() 메서드는 참조 문자열이 정렬 순으로
// 지정된 문자열 앞 혹은 뒤에 오는지 또는 동일한 문자열인지 나타내는 수치를 반환합니다.
