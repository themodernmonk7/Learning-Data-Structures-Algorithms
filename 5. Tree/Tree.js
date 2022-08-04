class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  isEmpty() {
    return this.root === null
  }

  insert(value) {
    const newNode = new Node(value)
    if (this.isEmpty()) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  //   Method: Insert
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode
      } else {
        this.insertNode(root.left, newNode)
      }
    } else {
      if (root.right === null) {
        root.right = newNode
      } else {
        this.insertNode(root.right, newNode)
      }
    }
  }

  //   Method: Search
  search(root, value) {
    if (!root) {
      return false
    } else {
      if (root.value === value) {
        return true
      } else if (value < root.value) {
        return this.search(root.left, value)
      } else {
        return this.search(root.right, value)
      }
    }
  }

  //preOrder method
  preOrder(root) {
    if (root) {
      console.log(root.value)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }

  //inorder method
  inOrder(root) {
    if (root) {
      this.inOrder(root.left)
      console.log(root.value)
      this.inOrder(root.right)
    }
  }

  //postORder method
  postOrder(root) {
    if (root) {
      this.inOrder(root.left)
      this.inOrder(root.right)
      console.log(root.value)
    }
  }

  // BFS method
  levelOrder() {
    // Use the omptimised queue implementation
    const queue = []
    queue.push(this.root)
    while (queue.length) {
      let curr = queue.shift()
      console.log(curr.value)
      if (curr.left) {
        queue.push(curr.left)
      }
      if (curr.right) {
        queue.push(curr.right)
      }
    }
  }
  // BFS method
  levelOrder() {
    // Use the omptimised queue implementation
    const queue = []
    queue.push(this.root)
    while (queue.length) {
      let curr = queue.shift()
      console.log(curr.value)
      if (curr.left) {
        queue.push(curr.left)
      }
      if (curr.right) {
        queue.push(curr.right)
      }
    }
  }

  // min method
  min(root) {
    if (!root.left) {
      return root.value
    } else {
      return this.min(root.left)
    }
  }

  // max method
  max(root) {
    if (!root.right) {
      return root.value
    } else {
      return this.max(root.right)
    }
  }

  // delete method
  delete(value) {
    this.root = this.deleteNode(this.root, value)
  }

  deleteNode(root, value) {
    if (root === null) {
      return root
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value)
    } else if (value < root.value) {
      root.right = this.deleteNode(root.right, value)
    } else {
      if (!root.left && !root.right) {
        return null
      }
      if (!root.left) {
        return root.right
      } else if (!root.right) {
        return root.left
      }
      root.value = this.min(root.right)
      root.right = this.deleteNode(root.right, root.value)
    }
    return root
  }
}

const bst = new BinarySearchTree()
console.log("Tree is empty?", bst.isEmpty())

//** ========== INSERT METHOD ==========  */
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

//** ========== SEARCH METHOD ==========  */
console.log(bst.search(bst.root, 10))
console.log(bst.search(bst.root, 5))
console.log(bst.search(bst.root, 15))
console.log(bst.search(bst.root, 20))

//** ========== DFS - preOrder METHOD ==========  */
bst.preOrder(bst.root) // 10, 5, 3, 7, 15

//** ========== DFS - inOrder METHOD ==========  */
bst.inOrder(bst.root) // 3, 5, 7, 10, 15

//** ========== DFS - postOrder METHOD ==========  */
bst.postOrder(bst.root) // 3, 5, 7, 10, 15

//** ========== BFS - levelOrder METHOD ==========  */
bst.levelOrder() // 10, 5, 15, 3, 7

//** ========== BFS - levelOrder METHOD ==========  */
console.log(bst.min(bst.root)) // 3
console.log(bst.max(bst.root)) // 15

//** ========== DELETE METHOD ==========  */
bst.levelOrder()

bst.delete(3)
bst.levelOrder()
