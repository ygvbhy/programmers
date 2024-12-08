let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let count = 0;
for (let i = 1; i <= n; i++) {
  let data = input[i];
  // true 값 반환이라면 count 증가
  if (check(data)) count += 1;
}

console.log(count);

// 그룹 단어 체커
function check(data) {
  let setData = new Set(data[0]);
  for (let i = 0; i < data.length; i++) {
    if (data[i] != data[i + 1]) {
      // 이미 있는 단어라면 false
      if (setData.has(data[i + 1])) return false;
      // 없는 단어라면 set에 추가
      else setData.add(data[i + 1]);
    }
  }
  return true;
}
