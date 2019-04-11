// CODE here for your Lambda Classes

class Person {
  constructor(personProps) {
    this.name = personProps.name;
    this.age = personProps.age;
    this.location = personProps.location;
    this.gender = personProps.gender;
  }
  speak() {
    `Hello, my name is ${this.name}, I am from ${this.location}`
  }
}
