let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let [r, string] = input[i].split(" ");
  let answer = "";

  for (let j = 0; j <= string.length; j++) {
    answer += string.charAt(j).repeat(r);
  }
  console.log(answer);
}
