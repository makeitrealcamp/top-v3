function Room(num) {
  this.number = num;
  this.avaliable = true;
  this.guests = 0;
}

function Hotel(numberOfRooms) {
  let rooms = [];

  for (let i = 0; i < numberOfRooms; i++) {
    rooms[i] = new Room(i + 1);
  }

  this.rooms = rooms;
  this.numberOfRooms = numberOfRooms;

  this.checkin = function(room, guests) {
    if (room <= this.numberOfRooms) {
      if (this.rooms[room -1].avaliable) {
        this.rooms[room - 1].avaliable = false;
        this.rooms[room - 1].guests = guests;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  this.checkout = function(room) {
    if (room <= this.numberOfRooms) {
      if (!this.rooms[room -1].avaliable) {
        this.rooms[room - 1].avaliable = true;
        this.rooms[room - 1].guests = 0;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  this.getAvailableRooms = function() {
    let avalaibleRooms = []
    
    this.rooms.forEach(function(item){
      if (item.avaliable) {
        avalaibleRooms.push(item);
      }
    });

    return avalaibleRooms;
  }

  this.getOccupliedRooms = function() {
    let occupliedRooms = []
    
    this.rooms.forEach(function(item){
      if (!item.avaliable) {
        occupliedRooms.push(item);
      }
    });

    return occupliedRooms;
  }
}

var hotel = new Hotel(2);
console.log(hotel.getAvailableRooms()); // an array with two rooms.
console.log(hotel.getOccupliedRooms()); // []

console.log(hotel.checkin(1, 3)); // true
console.log(hotel.checkin(1, 8)); // false (the room 1 is occupied)
console.log(hotel.checkin(4, 8)); // false (the room 4 doesn't exists)

console.log(hotel.getAvailableRooms()); // an array with one element: room 2
console.log(hotel.getOccupliedRooms()); // an array with one element: room 1

console.log(hotel.checkout(1)); // true
console.log(hotel.checkout(1)); // false, (room 1 is available)
console.log(hotel.checkout(4)); // false, (room 2 is available)

console.log(hotel.getAvailableRooms()); // an array with one element: room 2

