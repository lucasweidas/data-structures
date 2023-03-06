class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  #head;

  constructor() {
    this.#head = null;
    this.length = 0;
  }

  pushFront(data) {
    const newNode = new ListNode(data);
    this.length++;
    if (this.empty()) {
      this.#head = newNode;
      return;
    }
    newNode.next = this.#head;
    this.#head = newNode;
  }

  topFront() {
    return this.#head;
  }

  popFront() {
    if (this.empty()) return null;

    const frontNode = this.topFront();
    this.length--;
    if (frontNode.next === null) {
      this.#head = null;
      return null;
    }

    this.#head = frontNode.next;
    return frontNode;
  }

  pushBack(data) {
    if (this.empty()) return this.pushFront(data);

    const backNode = this.topBack();
    backNode.next = new ListNode(data);
    this.length++;
  }

  topBack() {
    if (this.empty()) return null;

    let current = this.topFront();
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }

  popBack() {
    if (this.empty()) return null;
    if (this.length === 1) return this.popFront();

    let current = this.topFront();
    while (current.next.next !== null) {
      current = current.next;
    }
    const backNode = current.next;
    current.next = null;
    this.length--;
    return backNode;
  }

  find(data) {
    let current = this.topFront();
    while (current !== null && current.data !== data) {
      current = current.next;
    }
    return current;
  }

  findNode(data) {
    let current = this.topFront();
    while (current !== null) {
      if (current.data === data) return true;
      current = current.next;
    }
    return false;
  }

  erase(data) {
    if (this.empty()) return null;

    let current = this.topFront();
    if (current.data === data) return this.popFront();

    while (current !== null) {
      if (current.next?.data === data) {
        const keyNode = current.next;
        current.next = keyNode.next;
        this.length--;
        return keyNode;
      }
      current = current.next;
    }
    return null;
  }

  empty() {
    return this.#head === null;
  }

  addBefore(node, data) {
    if (!(node instanceof ListNode)) {
      throw new TypeError("The provided node isn't an instance of ListNode");
    }

    let current = this.topFront();
    if (current === node) return this.pushFront(data);

    while (current !== null && current.next !== node) {
      current = current.next;
    }
    if (current === null) {
      throw new ReferenceError("The provided node isn't present in the linked list");
    }

    const newNode = new ListNode(data);
    newNode.next = node;
    current.next = newNode;
    this.length++;
  }

  addAfter(node, data) {
    if (!(node instanceof ListNode)) {
      throw new TypeError("The provided node isn't an instance of ListNode");
    }

    let current = this.topFront();
    while (current !== null && current !== node) {
      current = current.next;
    }
    if (current === null) {
      throw new ReferenceError("The provided node isn't present in the linked list");
    }

    const newNode = new ListNode(data);
    newNode.next = current.next;
    current.next = newNode;
    this.length++;
  }

  *[Symbol.iterator]() {
    if (this.empty()) return;

    let current = this.topFront();
    while (current !== null) {
      yield current.data;
      current = current.next;
    }
  }
}
