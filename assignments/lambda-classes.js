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

class Instructor extends Person {
  constructor(instProps) {
    super(instProps);
    this.specialty = instProps.gender;
    this.favLanguage = instProps.gender;
    this.catchPhrase = instProps.gender;
  }
  demo() {
    `Today we are learning about ${subject}`
  }
  grade() {
    `${student.name} receives a perfect score on ${subject}`
  }
}
