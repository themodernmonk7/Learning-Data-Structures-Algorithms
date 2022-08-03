// / Queue Data Structure

class Queue {
  constructor() {
    this.items = []
  }

  enqueue(element) {
    this.items.push(element)
  }

  // Remove the oldest element from the queue
  dequeue() {
    return this.items.shift()
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0
  }

  // Get the value of the element at the front of the queue wihout removing it
  peek() {
    if (!this.items) {
      return this.items[0]
    }
    return null
  }

  // Get the number of elements in the queue
  size() {
    return this.items.length
  }

  // Visualize the elemetns in the queue
  print() {
    console.log(this.items.toString())
  }
}

const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.size())
queue.print()

console.log(queue.dequeue())
console.log(queue.peek())

class Queue {
  constructor() {
    this.items = {}
    this.rear = 0
    this.front = 0
  }

  // Add the element from the rear end of the queue
  enqueue(element) {
    this.items[this.rear] = element
    this.rear++
  }

  // remove the element from the front of the queue
  dequeue() {
    const item = this.items[this.front]
    delete this.items[this.front]
    this.front++
    return item
  }

  // Check if the queue is empty
  isEmpty() {
    return this.rear - this.front === 0
  }

  // Get the value of the element at the front of the queue without removing it
  peek() {
    return this.items[this.front]
  }

  // Get the number of elements in the queue
  size() {
    return this.rear - this.front
  }

  // Visualize the element in the queue
  print() {
    console.log(this.items)
  }
}

// Create a new instance of the class
const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log(queue.size())
queue.print()

console.log(queue.dequeue())
console.log(queue.peek())
