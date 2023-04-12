function Node (data){
  this.data = data;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList(){
  this.head = null;
  this.tail = null;

  // getLength()
  // returns the number of nodes in the LinkedLists
  this.getLength = function () {
    let count = 0;
    let node = this.head;
    while(node){
      count++;
      node = node.next;
    }
    return count;
  }

  // 在尾部添加一個節點
  this.append = function (data) {
    const newNode = new Node(data);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  
  // 在指定的位置插入一個節點
  this.insert = function (position, data) {
    if (position < 0 || position > this.getLength() || !position) {
      return false;
    }
    const newNode = new Node(data);
    if (position === 0) {
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else if (position === this.getLength()) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      let index = 0;
      while (index < position) {
        current = current.next;
        index++;
      }
      // ex: head -> newNode -> current Node(2) -> Node(3)
      // set newNode.prev = current.prev
      // set newNode.next = current
      // set head.next = newNode -> set current.prev.next = newNode
      // set current.prev = newNode;
      newNode.prev = current.prev;
      newNode.next = current;
      current.prev.next = newNode;
      current.prev = newNode;
    }
    return true;
  };

  // 從指定的位置移除一個節點
  this.remove = function (position){
    if (position < 0 || position >= this.getLength() || !position ) {
      return false;
    }
    if (position === 0) {
      this.head = this.head.next;
      if (this.getLength() === 1) {
        this.tail = null;
      }else{
        this.head.prev = null;
      }
    }else if (position === this.getLength() - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }else{
      let current = this.head;
      let index = 0;
      while (index < position){
        current = current.next;
        index++;
      }
      // head -> currentNode -> Node(3)
      // head.next = Node(3) -> current.prev.next = current.next
      // current.next.prev = current.prev
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    return true;
  }

  // 返回指定位置的節點
  this.get = function(position){
    if (position < 0 || position >= this.getLength() || !position ) {
      return false;
    }
    let current = this.head;
    let index = 0;
    while (index < position){
      current = current.next;
      index++;
    }
    return current;
  }
  
}

const list = new DoublyLinkedList();
console.log(list)
list.append(1);
list.append(2);
list.append(3);
console.log(list.getLength()); // 3
console.log(list.get(1)); // 2
list.insert(1, 4);
console.log(list.get(1)); // 4
list.remove(2);
console.log(list.get(2)); // 3

