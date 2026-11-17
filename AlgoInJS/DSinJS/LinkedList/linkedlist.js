// Linked Lists Node that contains value and reference to the next node
class Node {
    // constructor
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
    this.head = null; // first node of list
    this.size = 0; // number of nodes in list
  }

  /*
      Adds an element in the end of the list
      @param {any} element - The element to add
  */
  add(element) {
    // creates a new node
    const node = new Node(element);

    // to store current node
    let current;

    if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
      // iterate till the end of list
            while (current.next) {
                current = current.next;
      }
            current.next = node;
    }
        this.size++;
  }

  /*
    Returns Size of the instantiated linked list
      @returns {number} - The current size
  */
  length() {
        return this.size;
  }

  /*
      Inserts the element at a given index
      @param {any} element - The element to insert
      @param {number} index - The index to insert at
  */
    insertAt(element, index) {
        if (index < 0 || index > this.length()) {
            throw new Error('What the hell input your giving?');
    } else {
            const node = new Node(element);
      if (index === 0) {
        node.next = this.head;
                this.head = node;
      } else {
        let prevNode, currentNode;
        let iterator = 0;
                currentNode = this.head;
                while (iterator < index) {
                    iterator++;
                    prevNode = currentNode;
                    currentNode = currentNode.next;
        }
                node.next = currentNode;
                prevNode.next = node;
      }
            this.size++;
    }
  }

  /*
      Removes the element from a given index
      @param {number} index - The index to remove from
  */
    removeFrom(index) {
        if (index < 0 || index >= this.length()) {
            throw new Error('What the hell input your giving?');
    } else {
      let prevNode;
            let iterator = 0;
            let currentNode = this.head;
            if (index === 0) {
                this.head = currentNode.next;
      } else {
                while (iterator < index) {
                    iterator++;
                    prevNode = currentNode;
                    currentNode = currentNode.next;
        }
                prevNode.next = currentNode.next;
      }
            this.size--;
    }
  }

  /*
  Removes the given element from the linked list
      @param {any} element - The element to find and remove
      @returns {any} - The removed element
  */
  removeElement(element) {
        let currentNode = this.head;
    let prevNode = null;
        let elementFound = false;
        while (currentNode !== null) {
            if (currentNode.element === element) {
                if (prevNode === null) {
                    this.head = currentNode.next;
        } else {
                    prevNode.next = currentNode.next;
        }
        elementFound = true;
        this.size--;
        return element;
      }
            prevNode = currentNode;
            currentNode = currentNode.next;
    }
        if (!elementFound) return -1;
  }

  /*
      Prints data of linked list to console
  */
  displayLinkedList() {
        if (this.size > 0) {
    let curr = this.head;
    while (curr) {
                console.log(curr.element);
      curr = curr.next;
    }
    }
  }

  /*
  Returns index of given element if exists else -1
      @param {any} element - The element to search for
      @returns {number} - The index or -1 if not found
  */
 indexOf(element) {
  let currentNode = this.head;
  let iterator = 0;
        while (currentNode !== null) {
            if (currentNode.element === element) {
                return iterator;
    }
            currentNode = currentNode.next;
            iterator++;
  }
        return -1;
 }

 /*
 Returns true if the list is empty
      @returns {boolean} - True if empty
 */
  isEmpty() {
        return this.size === 0;
  }
}

module.exports = {
  LinkedList, Node
};
