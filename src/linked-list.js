const Node = require('./node');

class LinkedList {
    constructor() {
        
        this.length = 0;
    }

    append(data) {
        var addInHead = false,
            addInTail = false;
        var node = new Node();
        if(!this.length) {
            this._tail = new Node();
            this._head = new Node();
            //return;
        } 
        if (!this._head.data && !this._tail.data) {
            addInTail = true;
        }
        if(!this._head.data && this._tail.data) {
            addInHead = true;
        } 
        if (addInHead) {
            this._head.prev = node;
            node.next = this._head;
            this._head = node;
            return this;
        }
        
        if (addInTail) {
            this._tail = new Node(data);
            this.length++;
            return this;
        }
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {
        this.length = 0
        this._tail = null;
        this._head = null;
        return this;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
