// Queue 
class Queue {
  constructor(){
    this.items = [];
  }

  // 尾端新增資料
  enqueue (element) {
    this.items.push(element);
  }

  // 前端刪除資料
  dequeue (){
    if(this.items.length === 0){
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // 查看佇列的第一個元素
  front (){
    if(this.items.length === 0){
      return "Queue is empty";
    }
    return this.items[0];
  }

  // 查看佇列中的元素數量
  size(){
    return this.items.length;
  }
  
}

// 建立一個 Queue 物件
const queue = new Queue();

// 新增資料
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

// 查看佇列中的元素個數
console.log(queue.size()); // 輸出：3

// 查看佇列的第一個元素
console.log(queue.front()); // 輸出：10

// 刪除佇列的第一個元素
queue.dequeue();

// 查看佇列的第一個元素
console.log(queue.front()); // 輸出：20



