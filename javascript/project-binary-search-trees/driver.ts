import { TreeNode, Tree } from "./tree";

const prettyPrint = (node: TreeNode | null, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const bst = new Tree();
const testArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// const testArr = [5, 10, 15, 7, 3];
// const testArr = [10, 5, 15, 3, 7];
bst.insertArr(testArr);
// console.log("Tree empty?", bst.isEmpty());
// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 23));
// console.log(bst.search(bst.root, 6345));
// bst.preOrder(bst.root);
// bst.inOrder(bst.root);
// bst.postOrder(bst.root);
// bst.levelOrderOptimized();
prettyPrint(bst.root);
console.log("Minimum: ", bst.min(bst.root));
console.log("Maximum: ", bst.max(bst.root));
console.log("Height: ", bst.height(bst.root));
console.log("Depth of 67: ", bst.depth(67, bst.root));
console.log("Balanced?", bst.isBalanced());
// bst.rebalance();
// console.log("Rebalanced:");
// prettyPrint(bst.root);
bst.delete(7);
bst.delete(23);
bst.delete(6345);
bst.delete(5);
bst.delete(9);
bst.delete(1);
prettyPrint(bst.root);
console.log("Minimum: ", bst.min(bst.root));
console.log("Maximum: ", bst.max(bst.root));
console.log("Height: ", bst.height(bst.root));
console.log("Depth of 67: ", bst.depth(67, bst.root));
console.log("Balanced?", bst.isBalanced());
