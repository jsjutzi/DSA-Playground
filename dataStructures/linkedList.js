var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(data) {
        this.data = data;
        this.next = null;
    }
    return LinkedListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(head) {
        if (head === void 0) { head = null; }
        this.head = head;
    }
    LinkedList.prototype.size = function () {
        var count = 0;
        var node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    };
    LinkedList.prototype.clear = function () {
        this.head = null;
    };
    LinkedList.prototype.getLast = function () {
        var lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    };
    LinkedList.prototype.getFirst = function () {
        return this.head;
    };
    LinkedList.prototype.search = function (value) {
        var node = this.head;
        while (node) {
            if (node.data === value) {
                return true;
            }
            node = node.next;
        }
        return false;
    };
    return LinkedList;
}());
var node1 = new LinkedListNode(2);
var node2 = new LinkedListNode(3);
node1.next = node2;
var list = new LinkedList(node1);
console.log(node1.next.data);
console.log(list.search(3));
