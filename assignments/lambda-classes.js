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

// == Instructor ==
const firstHunter = new Instructor({
  name: 'Old Hunter Gerhman',
  age: 400,
  location: 'Hunters Dream',
  gender: 'male',
  specialty: 'Monster Killing',
  favLanguage: 'English',
  catchPhrase: 'Tonight... Gehrman joins the hunt.....'
});

const secondHunter = new Instructor({
  name: 'Djura',
  age: 50,
  location: 'Old Yharnam',
  gender: 'male',
  specialty: 'Protecting Old Yharnam from Hunters',
  favLanguage: 'English',
  catchPhrase: 'You there, hunter. Didnt you see the warning? Turn back at once..'
});

const thirdHunter = new Instructor({
  name: 'Alfred',
  age: 23,
  location: 'Cathedral Ward',
  gender: 'male',
  specialty: 'Killing Vileblood',
  favLanguage: 'English',
  catchPhrase: 'There must be oodles for us to share..'
});

/* == Testing == */
// console.log(secondHunter);
// console.log(secondHunter.speak());
// console.log(secondHunter.demo('killing Hunters that attack my monsters'));
// console.log(secondHunter.grade('Hunter', 'killing Hunters that attack my monsters'));

// == Student ==
const firstStudent = new Student({
  name: 'Brennan',
  age: 24,
  location: 'Texas',
  gender: 'male',
  previousBackground: 'Writer',
  className: 'WEB19',
  favSubjects: [
    'JavaScript IV',
    'JavaScript',
    'JavaScript'
  ]
});

const secondStudent = new Student({
  name: 'Cortana',
  age: 9,
  location: 'Chosen controlled space; formally UNSC space',
  gender: 'female',
  previousBackground: 'Partner to The Master Chief',
  className: 'Class 2549',
  favSubjects: [
    'Enslaving organic life',
    'Saving The Master Chief',
    'Being Composed'
  ]
});

const thirdStudent = new Student({
  name: 'The Master Chief',
  age: 48,
  location: 'UNSC Infinity',
  gender: 'male',
  previousBackground: 'Civilian child',
  className: 'ORION Project Generation II',
  favSubjects: [
    'Strategy',
    'Combat',
    'Protecting Humanity'
  ]
});

/* == Testing == */
// console.log(thirdStudent);
// console.log(thirdStudent.speak());
// console.log(thirdStudent.listsSubjects());
// console.log(thirdStudent.PRAssignment('Escaping the Wilderness'));
// console.log(thirdStudent.sprintChallenge('Escaping the Wilderness'));