class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printStack() {
        return this.items.join(" ");
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.printStack()); // Output: 1 2 3
console.log(stack.pop()); // Output: 3
console.log(stack.printStack()); // Output: 1 2


class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printQueue() {
        return this.items.join(" ");
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.printQueue()); // Output: 1 2 3
console.log(queue.dequeue()); // Output: 1
console.log(queue.printQueue()); // Output: 2 3


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    printList() {
        let current = this.head;
        let list = '';
        while (current !== null) {
            list += current.data + ' ';
            current = current.next;
        }
        console.log(list.trim());
    }
}

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.printList(); // Output: 1 2 3
