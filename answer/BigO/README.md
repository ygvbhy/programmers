# 빅오 표기법

- 가장 빠르게 증가하는 항만을 고려하는 표기법
- 함수의 상한을 나타냄
- 예를 들어 연산 횟수가 3n^3 + 5n^2 + 1000000 인 알고리즘이 있다 할때 N 이 증가함에 따라서 3n^3 을 제외한 다른 항 영향력이 줄어든다.
- BIG-O 표기법에서는 차수가 가장 큰 항에서 계수를 제외하여 O(n^3) 으로 표기한다.

## 빅오 표기법 종류

밑으로 갈 수록 안좋은 시간복잡도

```
O(1)
O(log n)
O(n)
O(n log n)
O(n^2)
O(2^n)
```