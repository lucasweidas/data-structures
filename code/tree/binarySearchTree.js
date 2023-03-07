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
    if (this.#root === null) {
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
    if (this.#root === null) return false;
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
    return false;
  }

  getRoot() {
    return this.#root;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(10);
bst.insert(8);
bst.insert(11);
console.log(bst.getRoot());
console.log(bst.contains(8));
