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
  let queue = [rootNode];

  while (queue.length > 0){
    let currentNode = queue.shift();

    if (currentNode.left && currentNode.right){
      queue.push(currentNode.left);
      queue.push(currentNode.right);
    }

    if (currentNode.left && !currentNode.right){
      if (currentNode.left.right || currentNode.left.left){
        return false;
      }
    }

    if (currentNode.right && !currentNode.left){
      if (currentNode.right.right || currentNode.right.left){
        return false;
      }
    }
  }

  return true
}

function countNodes (rootNode) {
  let queue = [rootNode];
  let nodeCounter = 0;

  while (queue.length > 0){
    let currentNode = queue.shift();
    nodeCounter++;

    if (currentNode.left){
      queue.push(currentNode.left);
    }

    if (currentNode.right){
      queue.push(currentNode.right);
    }
  }

  return nodeCounter;
}

function getParentNode (rootNode, target) {
  if (target === rootNode.val) return null;

  let stack = [rootNode];

  while (stack.length > 0){
    let currentNode = stack.pop();

    if ((currentNode.left && currentNode.left.val === target) || (currentNode.right && currentNode.right.val === target)) return currentNode;

    if (currentNode.left){
      stack.push(currentNode.left);
    }

    if (currentNode.right){
      stack.push(currentNode.right);
    }
  }

}

function inOrderPredecessor (rootNode, target) {
  if (target - 1 <= 1) return null;

  let stack = [rootNode];

  while (stack.length > 0){
    let currentNode = stack.pop();

    if (currentNode.val === target - 1) return currentNode.val;

    if (currentNode.left){
      stack.push(currentNode.left);
    }

    if (currentNode.right){
      stack.push(currentNode.right);
    }
  }

  return inOrderPredecessor(rootNode, target - 1);

}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  let parent = getParentNode(rootNode, target);
  let targetNode;
  let setTarget = "";
  let targetPred = inOrderPredecessor(rootNode, target)

  let stack = [rootNode]

  while (stack.length > 0){
    let currentNode = stack.pop();

    if (currentNode.val === target) {
      targetNode = currentNode;
      break;
    }

    if (currentNode.left){
      stack.push(currentNode.left);
    }

    if (currentNode.right){
      stack.push(currentNode.right);
    }
  }

  // Undefined if the target cannot be found
  if (targetNode === undefined) return;
  if (!parent && !(targetNode.left || targetNode.right)) return null;

  // Set target based on parent
  if (parent){
    if (parent.right && parent.right.val === target){
      setTarget = "right"
    } else if (parent.left && parent.left.val === target){
      setTarget = "left"
    }
  }

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null
  if (!(targetNode.left || targetNode.right) && setTarget === "right"){
    parent.right = null;
  } else if (!(targetNode.left || targetNode.right) && setTarget === "left"){
    parent.left = null;
  }


  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  if (targetNode.left && targetNode.right){
    // let targetPredParent = getParentNode(rootNode, targetPred);
    // deleteNodeBST(rootNode, targetPred)
    targetNode.val = targetPred; //Uncomment above to delete the predecessor node

  }


  // Case 3: One child:
  //   Make the parent point to the child
  if (targetNode.left && !targetNode.right){
    if (setTarget === "right"){
      parent.right = targetNode.left;
    } else {
      parent.left = targetNode.left;
    }
  } else if (targetNode.right && !targetNode.left){
    if (setTarget === "right"){
      parent.right = targetNode.right;
    } else {
      parent.left = targetNode.right;
    }
  }

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
