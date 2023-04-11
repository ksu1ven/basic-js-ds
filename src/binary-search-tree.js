const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data){
    this.data=data;
    this.left=null;
    this.right=null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root1=null;
  }
  root() {
    return this.root1; 
  }

  add(data) {
    this.root1=addNode(this.root1, data)
    function addNode(node, data) {
      if(!node) {
        return new Node(data)
      }
      if(node.data==data) {
        return node
      }
      if(node.data>data) {
        node.left=addNode(node.left, data)
      } else {
        node.right=addNode(node.right,data)
      }
      return node
    }
  }

  has(data) {
   return searchWithin(this.root1, data)
   function searchWithin(node, data) {
    if(!node) {return false}
    if (node.data==data) {return true}
    if(data<node.data) {
      return searchWithin(node.left, data)
    } else {return searchWithin(node.right, data)}
   }
  }

  find(data) {
    return searchRoot(this.root1, data)
    function searchRoot(node, data) {
      if(!node) {return null}
      if (node.data==data) {return node}
      if(data<node.data) {
        return searchRoot(node.left, data)
      } else {return searchRoot(node.right, data)}
     }
  }

  remove(data) {
    this.root1=removeRoot(this.root1, data);
    console.log(this.root1)
    function removeRoot(node, data) {
      if(!node) {return null}
      if(data<node.data) {
        node.left=removeRoot(node.left, data)
        return node
      }
      else if(data>node.data) {
        node.right=removeRoot(node.right, data)
        return node
      }
      else {
        if(!node.left &&!node.right) {
          return null
        }
        if(!node.left) {
          node=node.right
          return node
        }
        if(!node.right) {
          node=node.left
          return node
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeRoot(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    let current=this.root1
    while(current.left) {
      current=current.left
    }
    return current.data
  }

  max() {
    let current=this.root1
    while(current.right) {
      current=current.right
    }
    return current.data
  }
}


const tree = new BinarySearchTree();
      tree.add(9);
      tree.add(14);
      tree.add(2);
      tree.add(6);
      tree.add(128);
      tree.add(8);
      tree.add(31);
      tree.add(54);
      tree.add(1);
      tree.remove(14);
      tree.remove(8);
      tree.remove(9);

module.exports = {
  BinarySearchTree
};