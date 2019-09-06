# Person

Create a constructor function called `Person` that receives a `name`, `weight` and `height` and initializes those attributes.

Add a method `bmi` that calculates the BMI (Body Mass Index) of the person. The BMI is calculated with the following formula:

```
weight / height^2
```

Add another method called `greet` that receives as an argument another person and returns the string "Hi <X>, my name is <Y>" where `<X>` is the name of the person that was received and `<Y>` is the attribute `name` of the person.

```javascript
var p1 = new Person("Pedro", 72, 1.5);
p1.bmi(); // 32

var p2 = new Person("Maria", 54, 1.7);
p2.bmi(); // 24.45

p1.greet(p2); // "Hi Maria, my name is Pedro"
p2.greet(p1); // "Hi Pedro, my name is Maria"
```
