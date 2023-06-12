class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  appendValue(value) {
    let curr = this.head;
    while (curr.next != null) {
      curr = curr.next;
    }

    const newNode = new Node(value);
    curr.next = newNode;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const newNode1 = new Node(2);
const newNode2 = new Node(5);
newNode1.next = newNode2;

let list = new LinkedList(newNode1);

list.appendValue(33);
list.appendValue(12341);
console.log(list.head);
