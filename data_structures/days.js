const LinkedList = require('./LinkedList');

const days = new LinkedList();
days.printList()
days.addToHead('monday');
days.addToHead('tuesday');

days.printList()
days.addToTail('wednesday');
days.addToTail('thursday');
days.addToTail('friday')

days.printList()

days.removeHead();
days.printList()