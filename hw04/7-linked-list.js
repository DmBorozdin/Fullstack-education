class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    appendNode(newNode){
        let node = this.head;
        if(node == null){
            this.head = newNode;
            return;
        }
        while (node.next) {
            node = node.next;
        }
        node.next = newNode;
    }

    size() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    getNode(value) {
        if (!this.head) {
          return null;
        }
      
        let currentNode = this.head;
        while (currentNode) {
          if (value !== undefined && currentNode.val === value) {
            return currentNode;
          }
          currentNode = currentNode.next;
        }
      
        return null;
      }

    getNodeByIndex(index) {
        if(index === 0) {
            return this.head;
        };
        let currentNode = this.head;
    
        while(currentNode !== null &&  index > 0){
            currentNode = currentNode.next;
            index--;
        };
        return currentNode;
    }

    deleteNode(value) {
        if (!this.head) {
          return null;
        }
        let deletedNode = null;
      
        while (this.head && this.head.val === value) {
          deletedNode = this.head;
          this.head = this.head.next;
        }
      
        let currentNode = this.head;
      
        if (currentNode !== null) {
          while (currentNode.next) {
            if (currentNode.next.val === value) {
              deletedNode = currentNode.next;
              currentNode.next = currentNode.next.next;
            } else {
              currentNode = currentNode.next;
            }
          }
        }
      
        return deletedNode;
    }

    changeNode(value, newValue) {
        if (!this.head) {
          return;
        }
      
        let currentNode = this.head;
      
        while (currentNode) {
          if (value !== undefined && currentNode.val === value) {
            currentNode.val = newValue;
          }
          currentNode = currentNode.next;
        }
    }
}

class Node {
    constructor(val) {
        this.val =  val;
        this.next = null;
    }
}

const myList = new LinkedList();
myList.appendNode(new Node(8));
myList.appendNode(new Node(5));
myList.appendNode(new Node(40));
myList.appendNode(new Node(5));
console.log(myList.getNode(8));
console.log(myList.getNodeByIndex(4));
console.log(myList.deleteNode(5));
console.log(myList.changeNode(40, 10));
console.log(myList);
