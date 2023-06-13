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
      curr = curr.next;
    }

    return size;
  }

  headNode() {
    return this.head;
  }

  tailNode() {
    let curr = this.head;

    while (curr.next != null) {
      curr = curr.next;
    }

    return curr;
  }

  atIndex(index) {
    let curr = this.head;

    for (let i = 0; i <= index; i++) {
      if (i == index) {
        return curr;
      } else if (curr.next != null) {
        curr = curr.next;
      } else {
        throw new Error("List does not contain given index.");
      }
    }
  }

  pop() {
    let curr = this.head;
    let prev = curr;

    while (curr.next != null) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = null;

    return prev;
  }

  contains(value) {
    let curr = this.head;

    while (curr.next != null) {
      if (curr.value.toLowerCase() == value.toLowerCase()) {
        return true;
      } else {
        curr = curr.next;
      }
    }

    return false;
  }

  find(value) {
    let curr = this.head;
    let index = 0;

    while (curr.next != null) {
      if (typeof value == "string" && typeof curr.value == "string") {
        value = value.toLowerCase();
        curr.value = curr.value.toLowerCase();
      }

      if (curr.value == value) {
        return index;
      } else {
        index++;
        curr = curr.next;
      }
    }

    return null;
  }

  toString() {
    let curr = this.head;
    let output = "";

    while (curr != null) {
      output += `${curr.value} -> `;
      curr = curr.next;
    }

    return console.log((output += "null"));
  }

  insertAt(value, index) {
    let curr = this.head;
    let position = 0;
    let prev = curr;
    let newNode = new Node(value);

    if (index == 0) {
      newNode.next = this.head;

      this.head = newNode;

      return this.head;
    }

    while (curr != null) {
      if (index == position) {
        newNode.next = curr;
        curr = newNode;
        prev.next = curr;
      }
      position++;
      prev = curr;
      curr = curr.next;
    }

    if (index == position) {
      newNode.next = null;
      prev.next = newNode;
    }

    if (index > position) {
      throw new Error(`Value of index exceedes list length of ${position}`);
    }

    return this.head;
  }

  removeAt(index) {
    let curr = this.head;
    let prev = curr;
    let position = 0;

    if (index == position) {
      this.head = curr.next;
    }

    while (curr != null) {
      if (index == position) {
        prev.next = curr.next;
      }
      position++;
      prev = curr;
      curr = curr.next;
    }

    if (index > position - 1) {
      throw new Error(`Value of index too large`);
    }

    return this.head;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}