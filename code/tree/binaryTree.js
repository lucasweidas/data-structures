class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  printPreOrder() {
    console.log(this.data);
    this.left?.printPreOrder();
    this.right?.printPreOrder();
  }

  printInOrder() {
    this.left?.printInOrder();
    console.log(this.data);
    this.right?.printInOrder();
  }

  printPostOrder() {
    this.left?.printPostOrder();
    this.right?.printPostOrder();
    console.log(this.data);
  }
}

export class BinaryTree {
  #root;

  constructor(root) {
    this.#root = root;
  }

  printPreOrder() {
    this.#print(TreeNode.prototype.printPreOrder);
  }

  printInOrder() {
    this.#print(TreeNode.prototype.printInOrder);
  }

  printPostOrder() {
    this.#print(TreeNode.prototype.printPostOrder);
  }

  #print(callback) {
    if (this.isEmpty()) return;
    callback.call(this.#root);
  }

  isEmpty() {
    return this.#root === null;
  }
}

const first = new TreeNode(1);
const second = new TreeNode(2);
const third = new TreeNode(3);
const fourth = new TreeNode(4);
const fifth = new TreeNode(5);
const sixth = new TreeNode(6);

first.left = second;
first.right = third;
third.left = fourth;
second.right = fifth;
fifth.left = sixth;

const binaryTree = new BinaryTree(first);

console.log('printPreOrder');
binaryTree.printPreOrder();
console.log('printInOrder');
binaryTree.printInOrder();
console.log('printPostOrder');
binaryTree.printPostOrder();
