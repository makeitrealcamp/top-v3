function Element(value) {
    this.value = value;
    this.counter = 0;
    this.add = function () {
        this.counter++;
    }
}

var HashTable = function () {
    this.array = {};

    this.addObj = function (obj) {
        var hash = JSON.stringify(obj).hashCode();
        this.array[hash] = this.array[hash] ? this.array[hash] : new Element(obj);
        this.array[hash].add();
        console.log("Added to " + this.array[hash].value + ", Counter is" + this.array[hash].counter)
        return true;
    }
    this.getGreaterCount = function () {
        var max = 0;
        var hash = 0;
        Object.keys(this.array).forEach((index) => {
            if (this.array[index].counter > max) {
                max = this.array[index].counter;
                hash = index;
            }
        });
        return this.array[hash].value;
    }
}

function mostFrequent(arr) {
    var hashTable = new HashTable();
    arr.forEach(element => {
        hashTable.addObj(element);
    });
    return hashTable.getGreaterCount();
}

String.prototype.hashCode = function () {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

var obj = "1asdfasdf";

console.log(mostFrequent([obj, 3, 2, obj, 4, obj])); // obj