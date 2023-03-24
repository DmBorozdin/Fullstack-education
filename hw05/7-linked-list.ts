interface NodeItem {
  value: number,
  next: NodeItem | null
}

class LinkedList {
    head: NodeItem | null;
    constructor(head?: NodeItem) {
      if (head) {
        this.head = head;
      } else {
        this.head = null;
      }
    }

    appendNode(newNode: NodeItem): void{
        let node = this.head;
        if(node === null){
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

    getNode(value: number) {
        if (!this.head) {
          return null;
        }
      
        let currentNode: NodeItem | null = this.head;
        while (currentNode) {
          if (value !== undefined && currentNode.val === value) {
            return currentNode;
          }
          currentNode = currentNode.next;
        }
      
        return null;
      }

    getNodeByIndex(index: number) {
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

    deleteNode(value: number) {
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

    changeNode(value: number, newValue: number) {
        if (!this.head) {
          return;
        }
      
        let currentNode: NodeItem | null = this.head;
      
        while (currentNode) {
          if (value !== undefined && currentNode.val === value) {
            currentNode.val = newValue;
          }
          currentNode = currentNode.next;
        }
    }
}

class NodeItem {
    val: number;
    next: NodeItem | null;
    constructor(val: number) {
        this.val =  val;
        this.next = null;
    }
}

const myList = new LinkedList();
myList.appendNode(new NodeItem(8));
myList.appendNode(new NodeItem(5));
myList.appendNode(new NodeItem(40));
myList.appendNode(new NodeItem(5));
console.log(myList.getNode(8));
console.log(myList.getNodeByIndex(4));
console.log(myList.deleteNode(5));
myList.changeNode(40, 10);
console.log(myList);