// # Hash Table

// Write a constructor function called `HashTable` that doesn't receive any 
// arguments but initializes an empty array.

// Add a method called`set` that receives an string and a value.Generate 
// the hash of the string and store the value in that position.

// ```javascript
// var hashTable = new HashTable();
// hashTable.set("one", 1); // true
// hashTable.get("one"); // 1

// hashTable.set("order", "test");
// hashTable.get("order"); // "test"
// ```

// You will have to implement the hashing function internally.
// It will use the ASCII number of the first character and substract 
// 65(which is the letter A).

var HashTable = function () {
    arr = []
    this.set = function (str, val) {
        let hash = str[0].charCodeAt() - 65
        arr.push(new Element(hash, val))
        console.log(true);
    }

    this.get = function (str) {
        let hash = str[0].charCodeAt() - 65
        let res
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].key === hash) {
                res = arr[i].value
            }
        }
        console.log(res);
    }
}

function Element(key, value) {
    this.key = key;
    this.value = value;
}

var hashTable = new HashTable();
hashTable.set("one", 1); // true
hashTable.get("one"); // 1

hashTable.set("order", "test");
hashTable.get("order"); // "test"