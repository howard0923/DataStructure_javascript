// Implementing a List Node in JavaScript

// ListNode
class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// LinkedList 
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

// create new list nodes

let node1 = new ListNode(2);
let node2 = new ListNode(3);
node1.next = node2;

// create LinkedList with head node1
let list = new LinkedList(node1);

// access the nodes in the list 
console.log(list.head.data); //2
console.log(list.head.next.data) //3

// Some LinkedList methods 

// 1.size()
// returns the number of nodes in the LinkedLists
LinkedList.prototype.size = function() {
  let count = 0;
  let node = this.head;
  while(node){
    count++;
    node = node.next;
  }
  return count;
};

// returns the number of nodes in the LinkedLists
console.log(list.size()); // 2

//2. clear()
// removes all nodes from the LinkedList
LinkedList.prototype.clear = function() {
  this.head = null;
}
//list.clear();

console.log(list); // null

// 3. getLast()
// returns the last node in the LinkedList
LinkedList.prototype.getLast = function() {
  let lastNode = this.head;
  if (lastNode) {
    while(lastNode.next) {
      lastNode = lastNode.next;
    }
  }
  return lastNode;
}

console.log(list.getLast()); // ListNode { data: 3, next: null }

// 4.getFirst()
// returns the first node in the LinkedList
LinkedList.prototype.getFirst = function() {
  let firstNode = this.head;
  return firstNode;
}

console.log(list.getFirst()); // ListNode { data: 2, next: ListNode { data: 3, next: null } }

// 5. add()
// adds a node to the end of the LinkedList
LinkedList.prototype.add = function (data) {
    const newNode = new ListNode (data);
    if (this.head === null){
      this.head = newNode;
    }else{
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = newNode;
    }
    
  }

list.add(4)
console.log(list.getLast()); // ListNode { data: 4, next: null }

// 6. remove()
// removes a node from the LinkedList
LinkedList.prototype.remove = function (data) {
  if(!this.head){
    return;
  }
  let current = this.head;
  if (current.data === data){
    this.head = current.next;
    return;
  }
  while(current.next){
    if(current.next.data === data){
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }
}

list.remove(3)
console.log(list); // LinkedList { head: ListNode { data: 2, next: ListNode { data: 4, next: null } } }

// 7.find()
// returns the first node that contains the provided data

LinkedList.prototype.find = function (data) {
  let current = this.head;
  while(current){
    if(current.data === data){
      return current;
    }
    current = current.next;
  }
  return null;
}

console.log(list.find(4)); // ListNode { data: 4, next: null }

// 8. getAt()
// returns the node at the provided index
LinkedList.prototype.getAt = function (index) {
  let current = this.head;
  let count = 0;
  while(current){
    if(count === index){
      return current;
    }
    count++;
    current = current.next;
  }
  return null;
}

console.log(list.getAt(0)) // ListNode { data: 2, next: ListNode { data: 4, next: null } }



// 9. insertAt()
// inserts a node before a specific index in the LinkedList
LinkedList.prototype.insertAt = function (data, index) {
  if(!this.head){
    this.head = new ListNode(data);
    return;
  }
  if(index === 0){
    this.head = new ListNode(data, this.head);
    return;
  }
  const previous = this.getAt(index-1);
  if(previous && !previous.next){
    previous.next = new ListNode(data);
  }
  else if(!previous){
    return 'Index out of bounds';
  }
  else{
    previous.next = new ListNode(data, previous.next);
  }
  
}
list.insertAt(5,2)  // insert 5 at index 2
console.log(list.insertAt(5,4)); //  Index out of bounds

// 10.reverse()
// reverses the LinkedList
LinkedList.prototype.reverse = function () {
  let current = this.head;
  if (!current) {
    return null;
  }
  let previous = null;
  // [head -> second -> third -> last -> null] to [null <- head <- second <- third <- last]
  // 1.record head.next and set head.next to null
  // 2.set current.next to previous node 
  // 3.set previous to current node
  // 4.set current to nextNode
  while (current) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next
  }
  this.head = previous;
}
console.log(list) // LinkedList { head: ListNode { data: 2, next: ListNode { data: 4, next: ListNode { data: 5, next: null } } } }
list.reverse()
console.log(list) // LinkedList { head: ListNode { data: 5, next: ListNode { data: 4, next: ListNode { data: 2, next: null } } } }