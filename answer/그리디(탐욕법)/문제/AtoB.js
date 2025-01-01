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
