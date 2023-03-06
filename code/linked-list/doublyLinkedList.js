class ListNode {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

export class LinkedList {
  #head;
  #tail;

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.size = 0;
  }

  prepend(data) {
    const newNode = new ListNode(data);
    if (this.isEmpty()) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      this.#head.prev = newNode;
      newNode.next = this.#head;
      this.#head = newNode;
    }
    this.size++;
    return true;
  }

  append(data) {
    if (this.isEmpty()) return this.prepend(data);

    const newNode = new ListNode(data);
    newNode.prev = this.#tail;
    this.#tail.next = newNode;
    this.#tail = newNode;
    this.size++;
    return true;
  }

  insertAt(index, data) {
    const isOutside = index < 0 || index > this.size;
    if (isNaN(index) || isOutside) return false;
    if (index === 0) return this.prepend(data);
    if (index === this.size) return this.append(data);

    const previous = this.get(index).prev;
    const newNode = new ListNode(data);
    newNode.prev = previous;
    newNode.next = previous.next;
    newNode.next.prev = newNode;
    previous.next = newNode;
    this.size++;
    return true;
  }

  getTop() {
    return this.#head;
  }

  getBack() {
    return this.#tail;
  }

  get(index) {
    const isOutside = index < 0 || index >= this.size;
    if (isNaN(index) || isOutside) return null;
    if (index === 0) return this.getTop();
    if (index === this.size - 1) return this.getBack();

    const mid = Math.floor(this.size / 2);
    if (index <= mid) return this.#searchFromHead(index);
    return this.#searchFromTail(index);
  }

  #searchFromHead(index) {
    let current = this.#head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  #searchFromTail(index) {
    let current = this.#tail;
    for (let i = this.size - 1; i > index; i--) {
      current = current.prev;
    }
    return current;
  }

  removeTop() {
    if (this.isEmpty()) return null;

    const top = this.#head;
    if (top.next === null) {
      this.#head = null;
      this.#tail = null;
    } else {
      this.#head = top.next;
      this.#head.prev = null;
    }
    this.size--;
    return top;
  }

  removeBack() {
    if (this.isEmpty()) return null;
    if (this.#tail.prev === null) return this.removeTop();

    const back = this.#tail;
    this.#tail = back.prev;
    this.#tail.next = null;
    this.size--;
    return back;
  }

  remove(index) {
    const isOutside = index < 0 || index >= this.size;
    if (isNaN(index) || isOutside) return null;
    if (index === 0) return this.removeTop();
    if (index === this.size - 1) return this.removeBack();

    const node = this.get(index);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
    return node;
  }

  set(index, data) {
    const node = this.get(index);
    if (node === null) return false;
    node.data = data;
  }

  isEmpty() {
    return this.#head === null;
  }

  *[Symbol.iterator]() {
    if (this.isEmpty()) return;

    let current = this.#head;
    while (current !== null) {
      yield current.data;
      current = current.next;
    }
  }
}
