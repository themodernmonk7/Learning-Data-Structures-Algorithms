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
  //   Time complexity = O(1) constant
  prepend(value) {
    // create a new node by instantiating the node class
    const node = new Node(value)
    // 👇 If the list is empty
    if (this.isEmpty()) {
      this.head = node
      // 👇 If the list is not empty
    } else {
      node.next = this.head
      this.head = node
    }
    // Update the size to keep track of the number of nodes in the list
    this.size++
  }

  //   Adding an element at the end of the lsit
  // Time complexity = O(n) Linear
  append(value) {
    const node = new Node(value)
    // If the list is empty
    if (this.isEmpty()) {
      this.head = node
      // If the list is not empty
    } else {
      let prev = this.head
      while (prev.next) {
        prev = prev.next
      }
      prev.next = node
    }
    this.size++
  }

  // Adding an element at the given index
  insert(value, index) {
    // CASE 1. Where index < 0 or index > size of the list, simply return from the function
    if (index < 0 || index > this.size) return
    // CASE 2. Where index = 0
    if (index === 0) {
      this.prepend(value)
    } else {
      const node = new Node(value)
      let prev = this.head
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }

  //   We have to traverse through the list from the first node till the last node while printing the value of each node
  // Creating a temp pointer called "current" or cur for short to traverse the list
  // current will point at the head node since head is the first node in the list, we will then use the next pointer in each node to traverse the list
  print() {
    if (this.isEmpty()) {
      console.log("List is empty")
    } else {
      let curr = this.head //first node of the list
      let listValues = ""
      while (curr) {
        listValues += `${curr.value} `
        curr = curr.next
      }
      console.log(listValues)
    }
  }
}

const list = new LinkedList()
console.log("List is empty?", list.isEmpty()) //true
console.log("List size", list.getSize()) //0

// list.print() // print when the list is empty

//* ===================== PREPEND ====================== **//
//* ===================== APPEND ====================== **//
// list.prepend(10)
// list.append(10)
// list.print() // print when list has one item

// list.prepend(20)
// list.prepend(30)

// list.append(20)
// list.append(30)
// list.print() // print when the list has three items

//* ===================== INSERT ====================== **//
list.insert(10, 0)
list.print()

list.insert(20, 0)
list.print()

list.insert(30, 1)
list.print()

list.insert(40, 2)
list.print()
console.log(list.getSize())
