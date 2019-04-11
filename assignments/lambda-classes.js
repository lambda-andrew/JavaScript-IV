// CODE here for your Lambda Classes

class Person {
  constructor(personProps) {
    this.name = personProps.name;
    this.age = personProps.age;
    this.location = personProps.location;
    this.gender = personProps.gender;
  }
  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}`;
  }
};

class Instructor extends Person {
  constructor(instProps) {
    super(instProps);
    this.specialty = instProps.specialty;
    this.favLanguage = instProps.favLanguage;
    this.catchPhrase = instProps.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
};

class Student extends Person {
  constructor(studentProps) {
    super(studentProps);
    this.previousBackground = studentProps.previousBackground;
    this.className = studentProps.className;
    this.favSubjects = studentProps.favSubjects;
  }
  listsSubjects() {
    return `Favorite subjects are: ${this.favSubjects[0]}, ${this.favSubjects[1]}, and ${this.favSubjects[2]}.`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
};

class ProjectManagers extends Instructor {
  constructor(pmProps) {
    super(pmProps);
    this.gradClassName = pmProps.gradClassName;
    this.favInstructor = pmProps.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
};

// == Character Roster ==

// == Person ==
const firstGuest = new Person({
  name: 'Arianna',
  age: 30,
  location: 'Cathedral Ward',
  gender: 'female'
});

const secondGuest = new Person({
  name: 'Gilbert',
  age: 40,
  location: 'Central Yarnham',
  gender: 'male'
});

const thirdGuest = new Person({
  name: 'Patches the Spider',
  age: 10000,
  location: 'the Lecture Building',
  gender: 'male'
});

/* == Testing == */
// console.log(firstGuest);
// console.log(thirdGuest.speak());