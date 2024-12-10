// 앞 선 문제 풀이와 마찬가지의 문제로 데이터의 수만 100만 으로 늘어난 경우임.
// 이미 짜놓은 코드 자체가 시간 복잡도가 그렇게 크지 않으므로 같은 코드로 진행 해도 문제 없이 정답 처리 됨.
// 일부 백준 코드의 문제에서 trim() 을 해줘야 정답 진행이 될 수 있으므로 유의 하여 풀기 바람
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
let s = input.sort((a, b) => a - b).join("\n");
console.log(s);
