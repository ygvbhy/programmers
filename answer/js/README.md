# JS

### 로그 출력

```js
console.log(); // 콘솔에 출력
```

### fs 모듈

```js
const fs = require("fs"); // 파일 시스템 모듈
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
```

입력 데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용한다.
전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환

### readline 모듈

```js
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

한 줄씩 입력을 받아서, 처리하여 정답을 출력할 때는 readline 모듈을 사용한다.

### 조건문

조건에 따라서 프로그램의 흐름을 결정할 때 사용할 수 있는 문법

```js
if (조건) {
  // 조건이 참인 경우 실행할 코드
} else if (조건) {
  // 조건이 참인 경우 실행할 코드
} else {
  // 조건이 거짓인 경우 실행할 코드
}
```

### 반복문

조건에 따라서 특정한 코드를 반복하고자 할 때 사용할 수 있는 코드.

- for 문

```js
// 초기문이 존재한담ㄴ 초기문이 먼저 실행
// 조건문이 참이라면 블록 내부 코드가 실행되고, 거짓이면 반복문이 종료
// 블록 내부 코드가 실행된 뒤에 증감문이 실행
for (초기문; 조건문; 증감문) {
  // 반복할 코드
}
```

- while 문

조건에 따라서 특정한 코드를 반복하고자 할 때 사용할 수 있는 코드

```js
while (조건문) {
  // 반복할 코드
}
```

### 형 변환

수 데이터와 문자열 데이터간의 상호 변환이 필요함.
number -> string

```js
let num = 123;
let str = num.toString();
```

string -> number

```js
let str = "123";
let num = parseInt(str);
```

### Array.prototype.reduce()

배열의 모든 원소에 대해 특정한 연산을 순차적으로 적용할 때 reduce()를 사용

```js
// 배열의 각 요소에 대해 reducer 함수를 실행한 뒤에 하나의 결과를 반환
// reducer의 형태 : (accumulator, currentValue, currentIndex, array) => (반환값)
// 배열의 각 원소를 하나씩 확인하며, 각 원소는 currentValue 에 해당
// 반환값은 그 이후의 원소에 대하여 accumulator 에 저장

let data = [1, 2, 3, 4, 5];
let result = data.reduce((acc, cur) => Math.min(a, b));
```

### 배열 초기화

알고리즘 문제를 풀 때 자주 사용되는 배열 초기화 방식

```js
// 직접 값을 설정하여 초기화
let arr = [8, 1, 5, ...]

// 길이가 5이고 모든 원소의 값이 0인 배열 초기화
let arr - new Array(5).fill(0)
```

### 집합 자료형

특정한 원소의 등장 여부를 파악할 대 집합 자료형을 효과적으로 사용할 수 있다.

```js
let s = new Set(); // 집합 객체 생성

// 여러 개의 원소 삽입
s.add(3);
s.add(7);

// 원소 제거
s.delete(3);

// 원소를 하나 씩 출력
for (let item of s) console.log(item);
```

### 소수점 아래 특정 자리에서 반올림

실수를 출력할 때 소수점 아래 특정 자리에서 반올림할 수 있다.

```js
let num = 123.456;
console.log(num.toFixed(2)); // 123.46
```

### 이스케이프 시퀀스 (Escape Sequence)

예약 문자 혹은 특수 문자를 출력하기 위하여 이스케이프 시퀀스를 사용할 수 있다.

```js
\t // 탭
\\ // 역 슬래시
\" // 쌍따옴표
\' // 홑따옴표
```
