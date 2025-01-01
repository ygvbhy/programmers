let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0].split(" ")[0]);
let k = Number(input[0].split(" ")[1]);

let count = 0;
while (k >= n) {
  if (n == k) break;
  k = k.toString();
  if (k[k.length - 1] == "1") {
    k = k.split("");
    k.pop();
    k = k.join("");
  } else k = k / 2;
  count++;
}

console.log(n == k ? count + 1 : -1);

// 추가 문제 풀이
let [a, b] = input[0].split(" ").map(Number);
let flag = false;
let result = 1;

while (a <= b) {
  if (a == b) {
    flag = true;
    break;
  }
  if (b % 2 == 0) b = parseInt(b / 2);
  else if (b % 10 == 1) b = parseInt(b / 10);
  else break;
  result++;
}

if (flag) console.log(result);
else console.log(-1);
