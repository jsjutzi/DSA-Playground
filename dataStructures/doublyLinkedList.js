var DoublyLinkedListNode = /** @class */ (function () {
    function DoublyLinkedListNode(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
    return DoublyLinkedListNode;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList(head) {
        if (head === void 0) { head = null; }
        this.head = head;
    }
    DoublyLinkedList.prototype.size = function () {
        var count = 0;
        var node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    };
    DoublyLinkedList.prototype.clear = function () {
        this.head = null;
    };
    DoublyLinkedList.prototype.getLast = function () {
        var lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    };
    DoublyLinkedList.prototype.getFirst = function () {
        return this.head;
    };
    DoublyLinkedList.prototype.search = function (value) {
        var node = this.head;
        while (node) {
            if (node.data === value) {
                return true;
            }
            node = node.next;
        }
        return false;
    };
    return DoublyLinkedList;
}());
var dlNode1 = new DoublyLinkedListNode(2);
var dlNode2 = new DoublyLinkedListNode(3);
dlNode1.next = dlNode2;
dlNode2.prev = dlNode1;
var dlList = new DoublyLinkedList(dlNode1);
console.log(dlNode1.next.data);
console.log(dlNode2.prev.data);
console.log(dlList.search(3));
