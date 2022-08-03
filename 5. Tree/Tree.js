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
    if(root) {
        this.inOrder(root.left)
        console.log(root.value);
        this.inOrder(root.right)
    }
  }

  //postORder method
  postOrder(root) {
    if(root) {
        this.inOrder(root.left)
        this.inOrder(root.right)
        console.log(root.value);
    }
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
