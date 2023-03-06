import { LinkedList } from '../linked-list/doublyLinkedList.js';

export class Queue {
  #list;

  constructor() {
    this.#list = new LinkedList();
  }

  enqueue(item) {
    this.#list.append(item);
  }

  dequeue() {
    if (this.#list.isEmpty()) return null;
    const item = this.#list.removeTop();
    return item.data;
  }

  isEmpty() {
    return this.#list.isEmpty();
  }

  [Symbol.iterator]() {
    return this.#list[Symbol.iterator]();
  }
}
