class Stack {
  constructor() {
    this.items = []
  }

  // add an element to the top of the stack
  push(element) {
    this.items.push(element)
  }

  // remove the top most element from the stack
  pop() {
    return this.items.pop()
  }

  // get the value of the top element without removing it
  peek() {
    return this.items[this.items.length - 1]
  }

  // check if the stack is empty
  isEmpty() {
    return this.items.length === 0
  }

  // get the nubmer of elements in the stack
  size() {
    return this.items.length
  }

  // visualize the elements in the stack
  print() {
    console.log(this.items.toString())
  }
}

const stack = new Stack()
console.log(stack.isEmpty())

stack.push(20)
stack.push(10)
stack.push(30)
console.log(stack.size())
stack.print()
console.log(stack.pop())
console.log(stack.peek())
