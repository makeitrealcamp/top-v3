// require module
const Circle = require('./Circle');

test('created object is not null', function() {
  expect(new Circle()).not.toBeNull();   
});

test('created object is initialized correctly', function() {
  const circle= new Circle(5);
  expect(circle.radius).tobe(5);
})

test('Area is calculated correctly', function() {
  const circle= new Circle(5);
  expect(circle.area()).toBeCloseTo(78.54)
})
test('Circunference  is calculated correctly', function() {
  const circle= new Circle(5);
  expect(circle.circunference()).toBeCloseTo(31.42)
})
  