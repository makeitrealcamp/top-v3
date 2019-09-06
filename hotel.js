/* Write a constructor function called Room that receives a number and initializes
an attribute called number. It should initialize an attribute called available with
the value true and guests with 0; */

function Room(number) {
    this.number = number
    this.available = true
    this.guests = 0
}
​
function Hotel(num) {
    this.rooms = []
    for (let i = 1; i <= num; i++) {
        this.rooms.push(new Room(i));
    }
    this.checkin = function (number, guests) {
        this.number = number
        this.guests = guests
        if (this.rooms.length + 1 > number && this.rooms[(number + -1)].available == true) {
            this.rooms[(number + -1)].available = false
            this.rooms[(number + -1)].guests = guests
        } else {
            return false
        }
    }
    this.checkout = function (number, guests) {
        if (this.rooms.length + 1 > number && this.rooms[(number + -1)].available == false) {
            this.rooms[(number + -1)].available = true
            this.rooms[(number + -1)].guests = -guests
​
        } else {
            return false
        }
    }
    this.getAvailableRooms = function () {
        this.availableRooms = []
        for (let j = 0; j < this.rooms.length; j++) {
            if (this.rooms[j].available == true) {
                this.availableRooms.push(this.rooms[j])
                return this.availableRooms
            }
        }
    }
    this.getOccupiedRooms = function () {
        this.OccupliedRooms = []
        for (let j = 0; j < this.rooms.length; j++) {
            if (this.rooms[j].available == false) {
                this.OccupiedRooms.push(this.rooms[j])
                return this.OccupliedRooms
            }
        }
    }
}

​
var Hotel = new Hotel(2);
console.log(Hotel.getAvailableRooms()); // an array with two rooms.
console.log(Hotel.getOccupiedRooms()); // []
​
console.log(Hotel.checkin(1, 3)); // true
console.log(Hotel.checkin(1, 8)); // false (the room 1 is occupied)
console.log(Hotel.checkin(4, 8)); // false (the room 4 doesn't exists)
​
console.log(Hotel.getAvailableRooms()); // an array with one element: room 2
console.log(Hotel.getOccupiedRooms()); // an array with one element: room 1
​
console.log(Hotel.checkout(1)); // true
console.log(Hotel.checkout(1)); // false, (room 1 is available)
console.log(Hotel.checkout(4)); // false, (room 2 is available)
