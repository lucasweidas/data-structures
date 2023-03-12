import { LinkedList } from '../linked-list/singlyLinkedList.js';

export class Stack {
  #list;
  #maxSize;

  constructor() {
    this.#list = new LinkedList();
    this.#maxSize = 1000;
    this.size = 0;
  }

  push(item) {
    if (this.isFull()) {
      throw new Error('Stack overflow');
    }
    this.#list.pushFront(item);
    this.size++;
  }

  pop() {
    if (this.#list.empty()) return null;
    const item = this.#list.popFront();
    this.size--;
    return item.data;
  }

  top() {
    return this.#list.topFront().data;
  }

  isFull() {
    return this.size === this.#maxSize;
  }

  isEmpty() {
    return this.#list.empty();
  }

  [Symbol.iterator]() {
    return this.#list[Symbol.iterator]();
  }
}
