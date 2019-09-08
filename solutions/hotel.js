// # Hotel
//
// Write a constructor function called `Room` that receives a number and initializes
// an attribute called `number`. It should initialize an attribute called `available`
// with the value `true` and `guests` with `0`;
//
// Write a constructor function called `Hotel` that receives a number and creates
// that same number of rooms (using the constructor function `Room`) inside an array
// called `rooms`. Each room should have it's own number starting with 1.
//
// Add a method called `checkin` to the `Hotel` that receives a room number and the
// number of guests. If the room exists and is available it updates the `available`
// attribute to `false`, `guests` with the number of guests, and returns `true`. Otherwise
// (the room doesn't exists or is not available) returns `false`.
//
// Add a method called `checkout` to the `Hotel` that receives a room number. If the
// room is occupied (not available) it updates the `available` attribute to `true`, `guests`
// with `0`, and returns `true`. Otherwise (the room is not occupied) returns `false`.
//
// Finally, add two methods: `getAvailableRooms` and `getOccupiedRooms` that return
// an array of available and occupied rooms respectively.
//

function Room(number) {
  this.number = number;
  this.available = true;
  this.guests = 0;
}

function Hotel(n) {
  var rooms = [];
  for(var i = 1; i <= n; i++) {
    rooms[i-1] = new Room(i+100); // Para darle el número a la habitación
  }

  this.checkin = function(rn, gn) { // rn: room number, gn: guests number
    var ind = (rn-1)-100; // Tamaño array 3, no 103
    if(ind < rooms.length){
      if((rooms[ind].number === rn) && (rooms[ind].available === true)) {
        rooms[ind].available = false;
        rooms[ind].guests = gn;
        return true;
      }
      return false;
    }
    return false + " (The room does not exist!)";
  }

  this.checkout = function(rn) {
    var ind = (rn-1)-100; // Tamaño array 3, no 103
    if(ind < rooms.length) {
      if(!rooms[ind].available) {
        rooms[ind].available = true;
        rooms[ind].guests = 0;
        return true;
      }
      return false;
    }
    return false + " (The room does not exist!)";
  }

  this.getAvailableRooms = function() {
    var av = [];
    for(var i = 0; i < rooms.length; i++) {
      if(rooms[i].available) {
        av.push(rooms[i].number);
      }
    }
    return av;
  }

  this.getOccupiedRooms = function() {
    var oc = [];
    for(var i = 0; i < rooms.length; i++) {
      if(!rooms[i].available) {
        oc.push(rooms[i].number);
      }
    }
    return oc;
  }
}

// Test Room
var r1 = new Room(101);
console.log(r1.number); // 101
console.log(r1.available); // true
console.log(r1.guests); // 0

// Test hotel
var hotel = new Hotel(2);

console.log(hotel.getAvailableRooms()); // an array with two rooms.
console.log(hotel.getOccupiedRooms()); // []

console.log(hotel.checkin(101, 3)); // true
console.log(hotel.checkin(101, 8)); // false (the room 1 is occupied)
console.log(hotel.checkin(104, 8)); // false (the room 4 doesn't exists)
//
console.log(hotel.getAvailableRooms()); // an array with one element: room 2
console.log(hotel.getOccupiedRooms()); // an array with one element: room 1
//
console.log(hotel.checkout(101)); // true
console.log(hotel.checkout(101)); // false, (room 1 is available)
console.log(hotel.checkout(102)); // false, (room 2 is available)
//
