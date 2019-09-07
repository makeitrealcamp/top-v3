var Square = require ('./square')

test('Created object is not null', function () {
    expect(new Square).not.toBeNull();
});

test('Object is initialized correctly', function() {
    const square= new Square (4);
    expect(square.side).toBe(4);
});

test('Area is calculated correctly', function() {
    const square= new Square (4);
    expect(square.area()).toBe(16)
});

test('Perimeter is calculated correctly', function() {
    const square= new Square (4);
    expect(square.perimeter()).toBe(16);
})

test('Diagonal is calculated correctly', function() {
    const square = new Square(4);
    expect(square.diagonal()).toBeCloseTo(5.66)
});