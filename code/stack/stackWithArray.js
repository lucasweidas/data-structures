export class Stack {
  #stack;
  #maxSize;
  constructor() {
    this.#stack = [];
    this.#maxSize = 5;
    this.size = 0;
  }

  push(item) {
    if (this.isFull()) {
      throw new Error('Stack overflow');
    }
    this.#stack[this.size++] = item;
  }

  pop() {
    if (this.isEmpty()) return null;
    const item = this.#stack.pop();
    this.size--;
    return item;
  }

  top() {
    return this.#stack[this.size - 1];
  }

  isFull() {
    return this.size === this.#maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }

  *[Symbol.iterator]() {
    for (let i = this.size - 1; i >= 0; i--) {
      yield this.#stack[i];
    }
  }
}
