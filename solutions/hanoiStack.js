function Node(value) {
    this.value = value;
    this.ref = null;
}

function Stack() {
    this.head = null;
    this.length = 0;

    this.push = function (value) {
        let node = new Node(value);
        if (this.length === 0) {
            this.head = node;
        } else {
            node.ref = this.head;
            this.head = node;
        }

        this.length++;
    }

    this.pop = function () {
        if (this.length > 0) {
            let node = this.head;
            this.head = node.ref;
            this.length--;
            return node.value
        } else {
            return null
        }
    }
}

function hanoi(disks, src, aux, dest) {
    if (disks === 0) return;

    hanoi(disks - 1, src, dest, aux);
    dest.push(src.pop());
    hanoi(disks - 1, aux, src, dest);
}

var t1 = new Stack();
t1.push(4);
t1.push(3);
t1.push(2);
t1.push(1);

var t2 = new Stack();
var t3 = new Stack();

hanoi(4, t1, t2, t3);
console.log("T1: ", t1);
console.log("T2: ", t2);
console.log("T3: ");
console.log(t3.pop());
console.log(t3.pop());
console.log(t3.pop());
console.log(t3.pop());