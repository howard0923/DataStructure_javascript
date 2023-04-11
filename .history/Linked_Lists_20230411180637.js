// Implementing a List Node in JavaScript

// ListNode
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
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