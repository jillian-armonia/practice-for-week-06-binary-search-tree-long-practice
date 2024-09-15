// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor() {
      this.root = null;
    }

    insert(val, currentNode=this.root) {
      let newNode = new TreeNode(val);

      if (this.root === null){
        this.root = newNode;
        currentNode = newNode;
      }

      if (currentNode === null){
        return newNode;
      }

      if (val < currentNode.val){
        let leftNode = this.insert(val, currentNode.left);

        if (currentNode.left === null){
          currentNode.left = leftNode;
        }
      }

      if (val > currentNode.val){
        let rightNode = this.insert(val, currentNode.right);

        if (currentNode.right === null){
          currentNode.right = rightNode;
        }
      }


    }

    search(val) {
      let currentNode = this.root;

      while (currentNode !== null){
        if (val === currentNode.val) return true;

        if (val < currentNode.val){
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }

      return false;
    }


    preOrderTraversal(currentNode = this.root) {
      if (currentNode === null) return;

      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }


    inOrderTraversal(currentNode = this.root) {
      if (currentNode === null) return;

      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
    }


    postOrderTraversal(currentNode = this.root) {
      if (currentNode === null) return;

      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      let queue = [this.root];

      while (queue.length > 0){
        let currentNode = queue.shift();
        console.log(currentNode.val);

        if (currentNode.left !== null){
          queue.push(currentNode.left);
        }

        if (currentNode.right !== null){
          queue.push(currentNode.right);
        }
      }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      let stack = [this.root];

      while (stack.length > 0){
        let currentNode = stack.pop();
        console.log(currentNode.val);

        if (currentNode.left !== null){
          stack.push(currentNode.left);
        }

        if (currentNode.right !== null){
          stack.push(currentNode.right);
        }
      }
  }
  }

  module.exports = { BinarySearchTree, TreeNode };
