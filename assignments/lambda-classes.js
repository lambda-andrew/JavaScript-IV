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
    this.specialty = instProps.specialty;
    this.favLanguage = instProps.favLanguage;
    this.catchPhrase = instProps.catchPhrase;
  }
  demo(subject) {
    `Today we are learning about ${subject}`
  }
  grade(subject) {
    `${student.name} receives a perfect score on ${subject}`
  }
}

class Student extends Person {
  constructor(studentProps) {
    super(studentProps) {
      this.previousBackground = studentProps.previousBackground;
      this.className = studentProps.className;
      this.favSubjects = studentProps.favSubjects;
    }
  }
  listsSubjects() {
    `Favorite subjects are: ${this.favSubject}`
  }
  PRAssignment(subject) {
    `${this.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(subject) {
    `${this.name} has begun sprint challenge on ${subject}`
  }
}

class ProjectManagers extends Instructor {
  constructor(pmProps) {
    super(pmProps) {
      this.gradClassName = pmProps.gradClassName;
      this.favInstructor = pmProps.favInstructor;
    }
  }
  standUp(channel) {
    `${this.name} announces to ${channel}, @channel standy times!​​​​​`
  }
  debugsCode(student, subject) {
    `${this.name} debugs ${student.name}'s code on ${subject}``
  }
}
