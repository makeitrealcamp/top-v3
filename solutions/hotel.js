/*
# Hotel

Write a constructor function called `Room` that receives a number and 
initializes an attribute called `number`. 
It should initialize an attribute called `available` with the value `true` 
and `guests` with `0`;

```javascript
var r1 = new Room(101);
r1.number; // 101
r1.available; // true
r1.guests; // 0
```

Write a constructor function called `Hotel` that receives a number and 
creates that same number of rooms (using the constructor function `Room`) 
inside an array called `rooms`. Each room should have it's own number starting 
with 1.

Add a method called `checkin` to the `Hotel` that receives a room number 
and the number of guests. 
If the room exists and is available it updates the `available` attribute 
to `false`, `guests` with the number of guests, and returns `true`. 
Otherwise (the room doesn't exists or is not available) returns `false`.

Add a method called `checkout` to the `Hotel` that receives a room number. 
If the room is occupied (not available) it updates the `available` attribute 
to `true`, `guests` with `0`, and returns `true`. 
Otherwise (the room is not occupied) returns `false`.

Finally, add two methods: `getAvailableRooms` and `getOccupiedRooms` 
that return an array of available and occupied rooms respectively.

```javascript
var hotel = new Hotel(2);
hotel.getAvailableRooms(); // an array with two rooms.
hotel.getOccupliedRooms(); // []

hotel.checkin(1, 3); // true
hotel.checkin(1, 8); // false (the room 1 is occupied)
hotel.checkin(4, 8); // false (the room 4 doesn't exists)

hotel.getAvailableRooms(); // an array with one element: room 2
hotel.getOccupliedRooms(); // an array with one element: room 1

hotel.checkout(1); // true
hotel.checkout(1); // false, (room 1 is available)
hotel.checkout(4); // false, (room 2 is available)
```
*/

function Room (number) {
this.number=number;
this.available=true;
this.guests=0;
}

function Hotel (number) {
    this.number=number
    this.checkin = function (room,guests) {
        if (room<this.rooms.length) {
            if (this.rooms[room].available) {
                this.rooms[room].available=false;
                this.rooms[room].guests=guests;
                return true
            }
            return false
        }
        return false
    }
    this.checkout =function (room) {
        if (room<this.rooms.length) {
        if (this.rooms[room].available) {
            return false
        }
        this.rooms[room].available=true;
        this.rooms[room].guests=0;
        return true
    }
    return false
    }

    this.rooms=createRooms(this.number)
    
    function createRooms(number){
        let rooms=[];
        for (let i=1; i<=number;i++) {
            const room = new Room(i)
            rooms.push(room)
          }
          return rooms
    }

    this.getAvailableRooms = function() {
        let result=[]
        this.rooms.forEach(element => {
           return  element.available ?  result.push(element) :[]
        }); 
        return result
    }

    this.getOccupiedRooms = function() {
        let result=[]
        this.rooms.forEach(element => {
           return  element.available ?  []:result.push(element)
        }); 
        return result
    }
    
}

module.exports = {Hotel, Room}

var hotel = new Hotel(2);
console.log(hotel.rooms);
console.log(typeof(hotel.rooms[0]));
/*console.log(hotel.getAvailableRooms());
console.log(hotel.getOccupiedRooms()); // []
console.log(hotel.checkin(1, 3)); // true
console.log(hotel.checkin(1, 8)); // false (the room 1 is occupied)
console.log(hotel.checkin(4, 8)); // false (the room 4 doesn't exists)

console.log(hotel.checkout(1)); // true
console.log(hotel.checkout(1)); // false, (room 1 is available)
console.log(hotel.checkout(4)); // false, (room 2 is available)

console.log( hotel.getAvailableRooms());
console.log( hotel.getOccupiedRooms()); // []*/