class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  #root;
  constructor() {
    this.#root = null;
  }

  insert(value) {
    if (this.#isEmpty()) {
      this.#root = new TreeNode(value);
      return;
    }
    BinarySearchTree.#insert(value, this.#root);
  }

  static #insert(value, node) {
    if (value <= node.data) {
      if (node.left === null) {
        node.left = new TreeNode(value);
      } else {
        this.#insert(value, node.left);
      }
    } else {
      if (node.right === null) {
        node.right = new TreeNode(value);
      } else {
        this.#insert(value, node.right);
      }
    }
  }

  contains(value) {
    if (this.#isEmpty()) return false;
    return BinarySearchTree.#contains(value, this.#root);
  }

  static #contains(value, node) {
    if (value === node.data) {
      return true;
    }
    if (value <= node.data) {
      if (node.left === null) return false;
      return this.#contains(value, node.left);
    }
    if (value > node.data) {
      if (node.right === null) return false;
      return this.#contains(value, node.right);
    }
  }

  printInOrder() {
    if (this.#isEmpty()) return;
    BinarySearchTree.#printInOrder(this.#root);
  }

  static #printInOrder(node) {
    if (node.left !== null) {
      this.#printInOrder(node.left);
    }
    console.log(node.data);
    if (node.right !== null) {
      this.#printInOrder(node.right);
    }
  }

  printPreOrder() {
    if (this.#isEmpty()) return;
    BinarySearchTree.#printPreOrder(this.#root);
  }

  static #printPreOrder(node) {
    console.log(node.data);
    if (node.left !== null) {
      this.#printPreOrder(node.left);
    }
    if (node.right !== null) {
      this.#printPreOrder(node.right);
    }
  }

  printPostOrder() {
    if (this.#isEmpty()) return;
    BinarySearchTree.#printPostOrder(this.#root);
  }

  static #printPostOrder(node) {
    if (node.left !== null) {
      this.#printPostOrder(node.left);
    }
    if (node.right !== null) {
      this.#printPostOrder(node.right);
    }
    console.log(node.data);
  }

  #isEmpty() {
    return this.#root === null;
  }

  getRoot() {
    return this.#root;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(10);
bst.insert(7);
bst.insert(11);
bst.insert(8);
console.log(bst.getRoot());
console.log(bst.contains(8));
console.log('printInOrder');
bst.printInOrder();
console.log('printPreOrder');
bst.printPreOrder();
console.log('printPostOrder');
bst.printPostOrder();
