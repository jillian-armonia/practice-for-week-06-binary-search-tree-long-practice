const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  let currentMin = rootNode;

  while (currentMin.left !== null){
     currentMin = currentMin.left;
  }

  return currentMin.val;
}

function findMaxBST (rootNode) {
  let currentMax = rootNode;

  while (currentMax.right !== null){
    currentMax = currentMax.right;
  }

  return currentMax.val;
}

function findMinBT (rootNode) {
  let min = rootNode;
  let queue = [rootNode];

  while (queue.length > 0){
    let current = queue.shift();

    if (current.left !== null){
      queue.push(current.left);
    }

    if (current.right !== null){
      queue.push(current.right);
    }

    if (current.val < min.val){
      min = current;
    }
  }

  return min.val;
}

function findMaxBT (rootNode) {
  let max = rootNode;
  let queue = [rootNode];

  while (queue.length > 0){
    let current = queue.shift();

    if (current.left !== null){
      queue.push(current.left);
    }

    if (current.right !== null){
      queue.push(current.right);
    }

    if (current.val > max.val){
      max = current;
    }
  }

  return max.val
}

function getHeight (rootNode) {
  if (rootNode === null) return -1;

  let stack = [rootNode];
  let levelCounter = 0;
  let maxCounter = 0;

  while (stack.length > 0){
    let currentNode = stack.pop();

    if (currentNode.left || currentNode.right){
      levelCounter++;

      if (currentNode.left){
        stack.push(currentNode.left);
      }

      if (currentNode.right){
        stack.push(currentNode.right)
      }
    }

    if (!currentNode.left && !currentNode.right){
      if (levelCounter > maxCounter){
        maxCounter = levelCounter;
        levelCounter = 0;
      }
    }

  }

  return maxCounter;
}

function balancedTree (rootNode) {
  // Your code here
}

function countNodes (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
