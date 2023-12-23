const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.arr = []
  }

  getUnderlyingList()  {
    let firstNode = new Node(this.arr[0]);
    let current = firstNode;
    console.debug(`current value: ${current.value}`);
    console.debug(`current next: ${current.next}`);
  
    for (let i = 1; i < this.arr.length; i++) {
      current.next = new Node(this.arr[i]);
      current = current.next;
    }
    
    return firstNode;
  }

  enqueue(value) {
    this.arr.push(value);
  }

  dequeue() {
    return this.arr.shift();
  }
}

module.exports = {
  Queue
};
