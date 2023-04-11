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

console.log(list); // 2

