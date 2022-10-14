import { Queue } from './queue.js';

const queue = new Queue(10);

/* console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.queue); */

queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);
queue.add(5);
queue.add(6);
queue.add(7);
console.log('Offer Two: ', queue.offerTwo(14));
queue.add(8);
queue.add(9);
queue.add(10);
console.log(queue.add(11));

console.log('Offer One: ', queue.offerOne(12));
console.log('Offer One: ', queue.offerOne(13));

console.log('Offer Two: ', queue.offerTwo(15));

console.log('Remove: ', queue.remove());

// console.log(queue.isEmpty())

console.log('Queue Size: ', queue.size());

console.log(queue.queue);
