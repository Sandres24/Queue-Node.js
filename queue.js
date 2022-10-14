import { Node } from './node.js';

export class Queue {
  #first;
  #last;
  #length;
  #limit;

  constructor(limit) {
    this.#first = null;
    this.#last = null;
    this.#length = 0;
    this.#limit = limit;
    this.queue = [];
  }

  add(element) {
    if (this.#length >= this.#limit) return false;

    const node = new Node(element);

    if (this.#first === null) {
      this.#first = node;
      this.#last = node;
    } else {
      this.#last.next = node;
      this.#last = node;
    }

    this.#length++;
    this.queue.push(element);
    return true;
  }

  element() {
    return this.#first.element;
  }

  offerOne(element) {
    const node = new Node(element);

    this.#last.next = node;
    this.#last = node;

    this.#length++;
    this.queue.push(element);

    return true;
  }

  offerTwo(element) {
    if (this.#limit > this.#length) return false;

    const node = new Node(element);

    this.#last = node;

    this.queue.pop();
    this.queue.push(element);

    return true;
  }

  peek() {
    if (this.#first === null) return null;

    return this.#first.element;
  }

  poll() {
    if (this.#first === null) return null;

    const head = this.#first;
    this.#first = this.#first.next;
    if (this.#first === null) this.#last = null;
    head.next = null;

    this.#length--;
    this.queue.shift();

    return head.element;
  }

  remove() {
    if (this.#first === null) return null;

    const head = this.#first;
    this.#first = this.#first.next;
    if (this.#first === null) this.#last = null;
    head.next = null;

    this.#length--;
    this.queue.shift();

    return head.element;
  }

  size() {
    return this.#length;
  }

  isEmpty() {
    return this.#length === 0;
  }
}
