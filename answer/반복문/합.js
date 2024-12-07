let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = parseInt(input[0]);

let b = 0;
for (let i = 1; i <= a; i++) {
  b += i;
}

console.log(b);

// • 혹은 단순히 등차수열의 합 공식을 이용할 수 있다.
// • 등차수열의 제 1항부터 제 𝑁항까지의 합을 𝑆𝑁이라고 하자.
// • 첫째 항이 𝑎, 마지막 항이 𝑙일 때: 𝑆𝑁 = 𝑁(𝑎 + 𝑙)/2

// 등차수열의 합 공식
console.log((n * (n + 1)) / 2);
