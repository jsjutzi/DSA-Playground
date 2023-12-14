class DoublyLinkedListNode {
    data: any
    next: DoublyLinkedListNode | null
    prev: DoublyLinkedListNode | null

    constructor(data: any) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    head: DoublyLinkedListNode | null

    constructor(head: DoublyLinkedListNode | null = null) {
        this.head = head;
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }

        return count
    }

    clear() {
        this.head = null
    }

    getLast() {
        let lastNode = this.head

        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }

        return lastNode
    }

    getFirst() {
        return this.head
    }

    search(value: any) {
        let node = this.head;

        while (node) {
            if (node.data === value) {
                return true
            }

            node = node.next
        }

        return false
    }
}


let dlNode1 = new DoublyLinkedListNode(2)
let dlNode2 = new DoublyLinkedListNode(3)
dlNode1.next = dlNode2
dlNode2.prev = dlNode1

let dlList = new DoublyLinkedList(dlNode1)

console.log(dlNode1.next.data)
console.log(dlNode2.prev.data)
console.log(dlList.search(3))