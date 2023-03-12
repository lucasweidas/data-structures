// runSinglyLinkedList();
// runDoublyLinkedList();
// runStackWithArray();
// runStackWithLinkedList();
// runQueueWithLinkedList();
// runQueueWithArray();
// runBinarySearchTree();
runBinaryTree();

async function runSinglyLinkedList() {
  const { LinkedList } = await import('./linked-list/singlyLinkedList.js');
  const linkedList = new LinkedList();

  linkedList.pushFront(1);
  linkedList.pushBack(2);
  linkedList.pushFront(3);
  linkedList.pushBack(4);
  console.log('PopFront:', linkedList.popFront().data);
  console.log('PopBack:', linkedList.popBack().data);
  console.log('HasNode:', linkedList.findNode(2));
  console.log('Erase:', linkedList.erase(1).data);
  console.log('Erase:', linkedList.erase(1));

  const nodeA = linkedList.find(2);
  linkedList.addBefore(nodeA, 10);
  const nodeB = linkedList.find(10);
  linkedList.addAfter(nodeB, 11);

  console.log('Front:', linkedList.topFront().data);
  console.log('Back:', linkedList.topBack().data);
  console.log('Length:', linkedList.length);
  for (const item of linkedList) console.log(item);
}

async function runDoublyLinkedList() {
  const { LinkedList } = await import('./linked-list/doublyLinkedList.js');
  const linkedList = new LinkedList();

  linkedList.prepend(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.prepend(4);
  console.log('removeTop:', linkedList.removeTop()?.data);
  console.log('removeBack:', linkedList.removeBack()?.data);
  linkedList.insertAt(0, 10);
  linkedList.insertAt(1, 20);
  console.log('get:', linkedList.get(0)?.data);
  console.log('remove:', linkedList.remove(2)?.data);
  linkedList.append(7);
  linkedList.insertAt(3, 22);
  linkedList.prepend(9);
  console.log('remove:', linkedList.remove(3)?.data);
  console.log('size:', linkedList.size);
  linkedList.set(1, '30');
  for (const item of linkedList) console.log(item);
}

async function runStackWithArray() {
  const { Stack } = await import('./stack/stackWithArray.js');
  const stack = new Stack();

  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.push(40);
  stack.push(50);
  console.log('Pop:', stack.pop());
  console.log('Pop:', stack.pop());
  console.log('Top:', stack.top());
  console.log('Size:', stack.size);
  for (const item of stack) console.log(item);
}

async function runStackWithLinkedList() {
  const { Stack } = await import('./stack/stackWithLinkedList.js');
  const stack = new Stack();

  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.push(40);
  stack.push(50);
  console.log('Pop:', stack.pop());
  console.log('Pop:', stack.pop());
  console.log('Top:', stack.top());
  console.log('Size:', stack.size);
  for (const item of stack) console.log(item);
}

async function runQueueWithLinkedList() {
  const { Queue } = await import('./queue/queueWithLinkedList.js');
  const queue = new Queue();

  queue.enqueue(10);
  queue.enqueue(20);
  queue.dequeue();
  queue.enqueue(30);
  console.log('Empty:', queue.isEmpty());
  for (const item of queue) console.log(item);
}

async function runQueueWithArray() {
  const { Queue } = await import('./queue/queueWithArray.js');
  const queue = new Queue();

  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(40);
  console.log('Full:', queue.isFull());
  console.log('Dequeue:', queue.dequeue());
  console.log('Dequeue:', queue.dequeue());
  console.log('Dequeue:', queue.dequeue());
  console.log('Dequeue:', queue.dequeue());
  console.log('Empty:', queue.isEmpty());
  queue.enqueue(50);
  queue.enqueue(60);
  for (const item of queue) console.log(item);
}

async function runBinarySearchTree() {
  const { BinarySearchTree } = await import('./tree/binarySearchTree.js');
  const bst = new BinarySearchTree();

  bst.insert(10);
  bst.insert(10);
  bst.insert(7);
  bst.insert(11);
  bst.insert(8);
  console.log(bst.getRoot());
  console.log(bst.contains(8));
  console.log('printPreOrder');
  bst.printPreOrder();
  console.log('printInOrder');
  bst.printInOrder();
  console.log('printPostOrder');
  bst.printPostOrder();
}

async function runBinaryTree() {
  const { BinaryTree } = await import('./tree/binaryTree.js');
  const binaryTree = new BinaryTree();
  const first = binaryTree.createNode(1);
  const second = binaryTree.createNode(2);
  const third = binaryTree.createNode(3);
  const fourth = binaryTree.createNode(4);
  const fifth = binaryTree.createNode(5);
  const sixth = binaryTree.createNode(6);
  const seventh = binaryTree.createNode(7);

  binaryTree.setRoot(first);
  first.left = second;
  first.right = third;
  second.left = fourth;
  second.right = fifth;
  third.left = sixth;
  third.right = seventh;

  // console.log('printPreOrder');
  // binaryTree.printPreOrder();
  // console.log('traversePreOrder');
  // binaryTree.traversePreOrder();
  // console.log('printInOrder');
  // binaryTree.printInOrder();
  // console.log('traverseInOrder');
  // binaryTree.traverseInOrder();
  console.log('printPostOrder');
  binaryTree.printPostOrder();
  console.log('traversePostOrder');
  binaryTree.traversePostOrder();
  // console.log('FullTree:', binaryTree.isFullTree());
  // console.log('PerfectTree:', binaryTree.isPerfectTree());
  // console.log('TotalEdges:', binaryTree.getTotalEdges());
  // console.log('NodeHeight:', binaryTree.getNodeHeight(second));
  // console.log('TreeHeight:', binaryTree.getTreeHeight());
  // console.log('NodeDegree:', binaryTree.getNodeDegree(sixth));
  // console.log('TreeDegree:', binaryTree.getTreeDegree());
}
