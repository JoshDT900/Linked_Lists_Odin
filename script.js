class LinkedList {
  constructor(head) {
    this.head = head;
  }

  append(value) {
    let curr = this.head;
    while (curr.next != null) {
      curr = curr.next;
    }

    const newNode = new Node(value);
    curr.next = newNode;
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;

    this.head = newNode;
  }

  size() {
    let size = 0;
    let curr = this.head;
    while (curr != null) {
      size++;
      curr = curr.next
    }

    return console.log(size);
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

list.append(33);
list.append(12341);
list.prepend(45);
list.prepend("Some Value");
list.append(88);
list.size();
