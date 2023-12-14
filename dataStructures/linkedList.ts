class LinkedListNode {
    data: any
    next: LinkedListNode | null

    constructor(data: any) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    head: LinkedListNode | null

    constructor(head: LinkedListNode | null = null) {
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


let node1 = new LinkedListNode(2)
let node2 = new LinkedListNode(3)
node1.next = node2

let list = new LinkedList(node1)

console.log(node1.next.data)
console.log(list.search(3))