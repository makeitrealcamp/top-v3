function Element(key, value) {
    this.key = key;
    this.value = value;
}

var HashTable = function () {
    this.array = [];

    this.set = function (str, value) {
        var first_char = str.charCodeAt(0) - 65;
        this.array[first_char] = this.array[first_char] ? this.array[first_char] : [];
        this.array[first_char].push(new Element(str, value))
        return true;
    }
    this.get = function (str) {
        var result;
        var first_char = str.charCodeAt(0) - 65;
        this.array[first_char].forEach(element => {
            if (element.key === str) {
                result = element.value;
            }
        });
        return result;
    }
}

var hashTable = new HashTable();
hashTable.set("one", 1); // true
console.log(hashTable.get("one")); // 1

hashTable.set("order", "test");
console.log(hashTable.get("order")); // "test"
console.log(hashTable.get("one")); // 1

