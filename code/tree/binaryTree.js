import { Stack } from '../stack/stackWithLinkedList.js';

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

  countTotalEdges(count = 0) {
    count = this.left?.countTotalEdges(count + 1) ?? count;
    count = this.right?.countTotalEdges(count + 1) ?? count;
    return count;
  }

  countNodeHeight(node, height = 0) {
    if (node === null) return height - 1;
    return Math.max(this.countNodeHeight(node.left, height + 1), this.countNodeHeight(node.right, height + 1));
  }

  countNodeDegree() {
    return (this.left ? 1 : 0) + (this.right ? 1 : 0);
  }

  countTreeDegree() {
    let parent = 0;
    let left = 0;
    let right = 0;
    if (this.left) {
      parent++;
      left = this.left.countTreeDegree();
    }
    if (this.right) {
      parent++;
      right = this.right.countTreeDegree();
    }
    return Math.max(parent, left, right);
  }

  traversePreOrder(node) {
    const stack = new Stack();
    stack.push(node);
    while (!stack.isEmpty()) {
      const current = stack.pop();
      console.log(current.data);
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
  }

  traverseInOrder(node) {
    const stack = new Stack();
    let current = node;
    while (true) {
      if (current) {
        stack.push(current);
        current = current.left;
      } else if (!stack.isEmpty()) {
        const popped = stack.pop();
        console.log(popped.data);
        current = popped.right;
      } else {
        break;
      }
    }
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
    this.checkNode(node);
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

  getTotalEdges() {
    if (this.isEmpty()) return 0;
    return TreeNode.prototype.countTotalEdges.call(this.#root);
  }

  getNodeHeight(node) {
    if (node == null) return 0;
    this.checkNode(node);
    return TreeNode.prototype.countNodeHeight(node);
  }

  getTreeHeight() {
    if (this.isEmpty()) return 0;
    return TreeNode.prototype.countNodeHeight(this.#root);
  }

  getNodeDegree(node) {
    if (node == null) return 0;
    this.checkNode(node);
    return TreeNode.prototype.countNodeDegree.call(node);
  }

  getTreeDegree() {
    if (this.isEmpty()) return 0;
    return TreeNode.prototype.countTreeDegree.call(this.#root);
  }

  checkNode(node) {
    if (!(node instanceof TreeNode)) {
      throw new TypeError('node must be an instance of TreeNode');
    }
  }

  isEmpty() {
    return this.#root === null;
  }

  traversePreOrder() {
    if (this.isEmpty()) return;
    TreeNode.prototype.traversePreOrder(this.#root);
  }

  traverseInOrder() {
    if (this.isEmpty()) return;
    TreeNode.prototype.traverseInOrder(this.#root);
  }
}
