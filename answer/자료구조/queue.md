# 큐 (Queue)

- 큐는 먼저 삽입된 데이터가 먼저 추출되는 자료구조
- 예) 놀이동산에서 줄을 서는것과 같음

## 연결리스트로 큐 구현

- 큐를 연결 리스트로 구현하면, 삽입과 삭제에 있어서 O(1)을 보장할 수 있다.
- 연결 리스트로 구현할 때는 머리 와 꼬리 두 개의 포인터를 가진다.
- 머리: 남아있는 원소 중 가장 먼저 들어 온 데이터를 가리키는 포인터
- 꼬리: 남아있는 원소 중 가장 마지막에 들어온 데이터를 가리키는 포인터

## 큐 동작 속도: 배열 vs 연결 리스트

- 다수의 데이터를 삽입 및 삭제할 때에 대하여, 수행 시간을 측정할 수 있다.
- 단순히 배열 자료형을 이용할 때보다 연결 리스트를 사용할 때 수행 시간 관점에서 효율적이다.
- js 에서는 Dictionary 자료형을 이용하여 큐를 구현하면 간단 하다.

## JS 큐 구현하기

```
class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

// 구형된 큐 라이브러리 사용
queue = new Queue();

// 5 삽입 - 2 삽입 - 3 삽입 - 7 삽입 - 삭제 - 1 삽입 - 4 삽입 - 삭제
queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(7);
queue.dequeue();
queue.enqueue(1);
queue.enqueue(4);
queue.dequeue();

// 먼저 들어온 순서대로 출력
while(queue.getlength() != 0) {
  console.log(queue.dequeue());
}

// 출력
// 3
// 7
// 1
// 4
```
