const Person = require("./person");

// tests
test('created object is not null', function() {
  expect(new Person()).not.toBeNull();
});

test('created object is initialized correctly', function() {
    const person = new Person("Pedro", 50, 1.5);
    
    expect(person.name).toBe("Pedro");
    expect(person.weight).toBe(50);
    expect(person.height).toBe(1.5);
});

test('bmi is calculated correctly', function() {
    const person = new Person("Pedro", 80, 2);
    expect(person.bmi()).toBe(20);
});

test('greet returns the correct phrase', function() {
    const person1 = new Person("Pedro", 50, 1.5);
    const person2 = new Person("Maria", 50, 1.5);

  expect(person1.greet(person2)).toBe(`Hi Maria, my name is Pedro`);
  expect(person2.greet(person1)).toBe(`Hi Pedro, my name is Maria`);
});
