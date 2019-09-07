function Person(name, weight, height) {
  this.name = name;
  this.weight = weight;
  this.height = height;
  this.bmi = function() {
    return this.weight / this.height ** 2;
  }

  this.greet = function(person) {
    return "Hi " + person.name + ", my name is " + this.name;
  }
}


var p1 = new Person("Pedro", 72, 1.5);
console.log(p1.bmi()); // 32

var p2 = new Person("Maria", 54, 1.7);
console.log(p2.bmi()); // 18.68

console.log(p1.greet(p2)); // "Hi Maria, my name is Pedro"
console.log(p2.greet(p1)); // "Hi Pedro, my name is Maria"
