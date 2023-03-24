var LinkedList = /** @class */ (function () {
    function LinkedList(head) {
        if (head) {
            this.head = head;
        }
        else {
            this.head = null;
        }
    }
    LinkedList.prototype.appendNode = function (newNode) {
        var node = this.head;
        if (node === null) {
            this.head = newNode;
            return;
        }
        while (node.next) {
            node = node.next;
        }
        node.next = newNode;
    };
    LinkedList.prototype.size = function () {
        var count = 0;
        var node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    };
    LinkedList.prototype.getNode = function (value) {
        if (!this.head) {
            return null;
        }
        var currentNode = this.head;
        while (currentNode) {
            if (value !== undefined && currentNode.val === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    };
    LinkedList.prototype.getNodeByIndex = function (index) {
        if (index === 0) {
            return this.head;
        }
        ;
        var currentNode = this.head;
        while (currentNode !== null && index > 0) {
            currentNode = currentNode.next;
            index--;
        }
        ;
        return currentNode;
    };
    LinkedList.prototype.deleteNode = function (value) {
        if (!this.head) {
            return null;
        }
        var deletedNode = null;
        while (this.head && this.head.val === value) {
            deletedNode = this.head;
            this.head = this.head.next;
        }
        var currentNode = this.head;
        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.val === value) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                }
                else {
                    currentNode = currentNode.next;
                }
            }
        }
        return deletedNode;
    };
    LinkedList.prototype.changeNode = function (value, newValue) {
        if (!this.head) {
            return;
        }
        var currentNode = this.head;
        while (currentNode) {
            if (value !== undefined && currentNode.val === value) {
                currentNode.val = newValue;
            }
            currentNode = currentNode.next;
        }
    };
    return LinkedList;
}());
var NodeItem = /** @class */ (function () {
    function NodeItem(val) {
        this.val = val;
        this.next = null;
    }
    return NodeItem;
}());
var myList = new LinkedList();
myList.appendNode(new NodeItem(8));
myList.appendNode(new NodeItem(5));
myList.appendNode(new NodeItem(40));
myList.appendNode(new NodeItem(5));
console.log(myList.getNode(8));
console.log(myList.getNodeByIndex(4));
console.log(myList.deleteNode(5));
myList.changeNode(40, 10);
console.log(myList);
