let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = input[1].split(" ").map(Number);
let newArr = [...new Set(arr)];
newArr.sort((a, b) => a - b);

let myMap = new Map();
for (let i = 0; i < newArr.length; i++) {
  myMap.set(newArr[i], i);
}

let answer = "";
for (x of arr) answer += myMap.get(x) + " ";
console.log(answer);
