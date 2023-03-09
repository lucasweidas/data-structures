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

  isFullTree() {
    if (!this.left && !this.right) {
      return true;
    }
    if (this.left && this.right) {
      return this.left.isFullTree() && this.right.isFullTree();
    }
    return false;
  }

  isPerfectTree(depth, level = 0) {
    if (!this.left && !this.right) {
      return depth === level + 1;
    }
    if (!this.left || !this.right) {
      return false;
    }
    return (this.left?.isPerfectTree(depth, level + 1) ?? true) && (this.right?.isPerfectTree(depth, level + 1) ?? true);
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

  isFullTree() {
    if (this.isEmpty()) return true;
    return TreeNode.prototype.isFullTree.call(this.#root);
  }

  isPerfectTree() {
    if (this.isEmpty()) return true;
    const depth = this.getDepth();
    return TreeNode.prototype.isPerfectTree.call(this.#root, depth);
  }

  getDepth(node) {
    if (!(node instanceof TreeNode)) {
      node = this.#root;
    }

    let depth = 0;
    while (node !== null) {
      node = node.left;
      depth++;
    }
    return depth;
  }

  isEmpty() {
    return this.#root === null;
  }
}
