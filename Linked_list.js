// To work with a linked list we always maintain a pointer to the first node in the list, and that pointer is called head and is crucial in almost every operation we perform on a linked list.
// However when link is empty there is no first node to point at and hence the head pointer will point at null.

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        // When  you instantiate a new linked list and it is empty and head will point at null
        this.head = null
        this.size = 0
    }

    // Method: Check if the size is empty
    isEmpty() {
        return this.size === 0
    }

    // Method: Get the size of the linked list
    getSize() {
        return this.size
    }

    // Adding an element at the start of the list
    prepend(value) {
        // create a new node by instantiating the node class
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        // Update the size to keep track of the number of nodes in the list
        this.size++
    }

}

const list = new LinkedList()
console.log('List is empty?', list.isEmpty()); //true
console.log('List size', list.getSize()); //0
