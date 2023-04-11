const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 *  */
  class ListNode {
 constructor(x) {
  this.value = x;
  this.next = null;
 }
 }

function removeKFromList(l, k) {
let current=l;
let prev=null;
let index=0;
while(current.next!==null) {
   index++
  current=current.next
  }
current=l
for(let i=0; i<index; i++) {
  if(current.value==k && i==0 &&current.next.value!=k) {
    l=current.next;
    } else if(current.value==k && i==0 && current.next.value==k) {
      while(current.next.value==k) {
        current=current.next
        i++
      }
      l=current.next;
    }
  if(current.value==k && i>0 && current.next.value!=k) {
  prev.next=current.next
  i++
  } else if(current.value==k && i>0 && current.next.value==k) {
    while(current.next.value==k) {
      current=current.next
      i++
    }
    prev.next=current.next
  }
  if(i==index-1 && current.next.value==k) {
    current.next=null
  }
  prev=current
  current=current.next
}
  return l
}


module.exports = {
  removeKFromList
};
