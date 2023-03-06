import { LinkedList } from '../linked-list/singlyLinkedList.js';

export class Stack {
  #list;
  constructor() {
    this.#list = new LinkedList();
  }

  push(item) {
    this.#list.pushFront(item);
  }

  pop() {
    if (this.#list.empty()) return null;
    const item = this.#list.popFront();
    return item.data;
  }

  peek() {
    return this.#list.topFront().data;
  }

  isEmpty() {
    return this.#list.empty();
  }

  [Symbol.iterator]() {
    return this.#list[Symbol.iterator]();
  }
}
