export class Queue {
  #queue;
  #read;
  #write;
  #maxSize;

  constructor() {
    this.#queue = [];
    this.#read = 0;
    this.#write = 0;
    this.#maxSize = 5;
  }

  enqueue(item) {
    if (this.isFull()) {
      throw new Error('Queue is full');
    }
    this.#queue[this.#write] = item;
    this.#write = this.#nextIndex(this.#write);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const item = this.#queue[this.#read];
    this.#queue[this.#read] = undefined;
    this.#read = this.#nextIndex(this.#read);
    return item;
  }

  #nextIndex(index) {
    return index + 1 === this.#maxSize ? 0 : index + 1;
  }

  isFull() {
    if (this.#write + 1 === this.#maxSize && this.#read === 0) return true;
    if (this.#write + 1 === this.#read) return true;
    return false;
  }

  isEmpty() {
    return this.#read === this.#write;
  }

  *[Symbol.iterator]() {
    if (this.isEmpty()) return;

    let i = this.#read;
    while (i !== this.#write) {
      yield this.#queue[i];
      i = this.#nextIndex(i);
    }
  }
}
