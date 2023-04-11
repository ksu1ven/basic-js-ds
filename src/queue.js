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

class LinkedList {
  constructor(x) {
    this.value = x;
    this.next = null;
   }
}

let arr= [];
class Queue {
   
  getUnderlyingList() {
    const obj=new LinkedList(arr[0]);
    let current=obj
     for(let i=1; i<arr.length; i++) {
      current.next= new LinkedList(arr[i]);
      current=current.next

    }
  arr=[]
  console.log(obj)
  return obj.next
  }
  enqueue(value) {
    arr.push(value);
  }
  dequeue() {
    let removed=arr.shift()
    return removed
}}
const queue = new Queue()

    


module.exports = {
  Queue
};
