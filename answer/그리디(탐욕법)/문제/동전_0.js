let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0].split(" ")[0]);
let k = Number(input[0].split(" ")[1]);

let count = 0;
for (let i = n; i > 0; i--) {
  if (k <= 0) break;
  let t = Number(input[i]);

  if (k / t >= 1) {
    count += Math.floor(k / t);
    k -= Math.floor(k / t) * t;
  }
}

console.log(count);
