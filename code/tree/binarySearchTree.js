class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.data) {
      if (this.left === null) {
        this.left = new TreeNode(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new TreeNode(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    if (value === this.data) return true;
    if (value <= this.data) {
      return this.left?.contains(value) ?? false;
    } else {
      return this.right?.contains(value) ?? false;
    }
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

export class BinarySearchTree extends TreeNode {
  constructor() {
    super(null);
  }

  insert(value) {
    if (value === undefined) {
      throw new Error('undefined is not a valid value');
    }
    if (this.isEmpty()) {
      this.data = value;
      return;
    }
    super.insert.call(this, value);
  }

  contains(value) {
    if (value === undefined || this.isEmpty()) return false;
    return super.contains.call(this, value);
  }

  printPreOrder() {
    if (this.isEmpty()) return;
    super.printPreOrder.call(this);
  }

  printInOrder() {
    if (this.isEmpty()) return;
    super.printInOrder.call(this);
  }

  printPostOrder() {
    if (this.isEmpty()) return;
    super.printPostOrder.call(this);
  }

  isEmpty() {
    return this.data === null;
  }

  getRoot() {
    return this.data;
  }
}
