class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head
    this.length = 1
    // console.log(this)
  }

  // 1. prepend
  prepend(value) {
    // Create new node
    const newNode = new Node(value)

    // Attch new node to the start
    newNode.next = this.head;
    this.head.prev = newNode
    this.head = newNode
    this.length++

  }
  //2. Print Linked List
  print() {
    const array = []
    let temp = this.head;
    while (temp !== null) {
      array.push(temp.value)
      temp = temp.next
    }
    console.log(array)
  }

  // 3. Append
  append(value) {
    // Create new nOde
    const newNode = new Node(value)

    // Attch new node to the end
    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode
    this.length++
  }

  // 4. Insert
  insert(value, index) {
    // Create new node
    const newNode = new Node(value)

    if(index >= this.length){
      return this.append(value)
    }

    // Create Leader and Follower
    const leader = this.traverseToNode(index - 1)
    const follower = leader.next

    // Insertion
    newNode.next = follower
    follower.prev = newNode
    leader.next = newNode
    newNode.prev = leader
  }
  //5. traverse-to-node
  traverseToNode(index) {
    const temp = this.head
    let counter = 0
    while (counter !== index) {
      temp = temp.next;
      counter++
    }
    return temp
  }

  

}

const myLinkedList = new LinkedList(1)

myLinkedList.prepend(0)
myLinkedList.append(2)
myLinkedList.insert(100,4)
myLinkedList.print()
