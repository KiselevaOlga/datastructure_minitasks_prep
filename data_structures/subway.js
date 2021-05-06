const DoublyLinkedList = require('./DoublyLinkedList.js');

// const subway = new DoublyLinkedList();

// subway.addToHead('TimesSquare');
// subway.addToHead('GrandCentral');
// subway.addToHead('CentralPark');
// subway.printList();
// subway.addToTail('PennStation');
// subway.addToTail('WallStreet');
// subway.addToTail('BrooklynBridge');
// subway.printList();
// subway.removeHead();
// subway.removeTail();
// subway.printList();
// subway.removeByData('TimesSquare');
// subway.printList();
const testList = new DoublyLinkedList();
testList.addToHead(9);
testList.printList()
testList.removeTail();
testList.printList()
testList.addToTail(8);
testList.printList()
testList.addToTail(2);
testList.printList()
testList.removeHead();
testList.printList()
testList.addToTail(4);
testList.printList()
testList.removeByData(9);
testList.printList()
testList.removeHead();
testList.printList()
console.log(testList.head.data);