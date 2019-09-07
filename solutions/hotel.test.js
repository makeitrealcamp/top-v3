const {Room, Hotel} = require ('./hotel')

test('Created objects are not null', function() {
    expect(new Room()).not.toBeNull();
    expect(new Hotel()).not.toBeNull();
});

test('Created objects are initialized correctly', function() {
    const room = new Room(1);
    expect(room.number).toBe(1);
    expect(room.available).toBe(true);
    expect(room.guests).toBe(0);
    
    const hotel = new Hotel(1);
    expect(hotel.number).toBe(1);
});


test('Hotel rooms created', function() {
    const hotel = new Hotel(2)
    const expected = [{ number: 1, available: true, guests: 0 }, { number: 2, available: true, guests: 0 }];
    expect(hotel.rooms).toEqual(expect.arrayContaining(expected));
});


