export class TreeNode {
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

  constructor() {
    this.#root = null;
  }

  createNode(data) {
    const newNode = new TreeNode(data);
    return newNode;
  }

  setRoot(node) {
    if (!(node instanceof TreeNode)) {
      throw new TypeError('node must be an instance of TreeNode');
    }
    this.#root = node;
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
