// CODE here for your Lambda Classes


class Person{
  constructor(persAtt){
  this.name = persAtt.name;
  this.age = persAtt.age;
  this.location = persAtt.location;
  this.gender = persAtt.gender;
}
  speak = function(){
    return `Hello my name is ${this.name}, and I am from ${this.location}.`;
  }
}

class Instructor extends Person{
  constructor(inAtt){
  super(inAtt);
  this.specialty = inAtt.specialty;
  this.favLanguage = inAtt.favLanguage;
  this.catchPhrase = inAtt.catchPhrase;
}
  demo = function(subject){
    return `Today we are learning about ${subject}`;
  }
  grade = function(student, subject){
    return `${student.name} received a perfect grade in ${subject}`;
  }
}

class Student extends Person{
  constructor(studAtt){
  super(studAtt);
  this.previousBackground = studAtt.previousBackground;
  this.className = studAtt.className;
  this.favSubjects = studAtt.favSubjects;
}
  listsSubjects = function(){
    return `${this.favSubjects}`;
  }
  PRAssignment = function(subject){
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge = function(subject){
    return `${this.name} has begun Sprint Challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor{
  constructor(instAtt){
  super(instAtt);
  this.gradClassName = instAtt.gradClassName;
  this.favInstructor = instAtt.favInstructor;
}
  standUp = function(channel){
    return `${this.name} announces to ${channel}: @channel standy times!`;
  }
  debugsCode = function(name, student, subject){
    return `${name} debugs ${student.name}'s code on ${subject}.`;
  }
}

const jack = new Person({
  name: "Jack",
  age: 34,
  location: "Kentucky",
  gender: "M"
});

const amy = new Person({
  name: "Amy",
  age: 30,
  location: "St. Louis",
  gender: "F"
});

const emily = new Person({
  name: "Emily",
  age: 24,
  location: "Michigan",
  gender: "F"
});

const jerry = new Student({
  name: "Jerry",
  age: 21,
  location: "Nashville",
  gender: "M",
  previousBackground: "I worked at McDonalds.",
  className: "Web30",
  favSubjects: ["HTML", "CSS", "UX"]
});

const jackie = new Student({
  name: "Jackie",
  age: 22,
  location: "Greenville",
  gender: "F",
  previousBackground: "I was a babysitter.",
  className: "Web28",
  favSubjects: ["JS", "Ruby", "UX"]
});

const jim = new Student({
  name: "Jim",
  age: 19,
  location: "Ashville",
  gender: "M",
  previousBackground: "I was a lifegaurd.",
  className: "Web10",
  favSubjects: ["HTML", "Python", "CSS"]
});

const tammy = new Instructor({
  name: "Tammy",
  age: 30,
  location: "Washington",
  gender: "F",
  specialty: "Javascript",
  favLanguage: "Python",
  catchPhrase: `Everybody's a critic.`
});

const jeff = new Instructor({
  name: "Jeff",
  age: 35,
  location: "Louisiana",
  gender: "M",
  specialty: "LESS",
  favLanguage: "React",
  catchPhrase: `You are not what you drink.`
});

const david = new Instructor({
  name: "David",
  age: 25,
  location: "Pennsylvania",
  gender: "M",
  specialty: "HTML",
  favLanguage: "C+",
  catchPhrase: `To be or not to be is not a question.`
});

const gary = new ProjectManager({
  name: "Gary",
  age: 42,
  location: "Idaho",
  gender: "M",
  specialty: "UX",
  favLanguage: "C#",
  catchPhrase: `When you fall off the horse, try a different horse.`,
  gradClassname: "Web15",
  favInstructor: "David"
});

const mallorie = new ProjectManager({
  name: "Mallorie",
  age: 50,
  location: "North Carolina",
  gender: "F",
  specialty: "CSS",
  favLanguage: "React",
  catchPhrase: `The bigger they are, the harder they fall, unless they're rich.`,
  gradClassname: "Web12",
  favInstructor: "Tammy"
});

const jacob = new ProjectManager({
  name: "Jacob",
  age: 53,
  location: "Utah",
  gender: "M",
  specialty: "HTML",
  favLanguage: "Javascript",
  catchPhrase: `I think, therefore I don't know.`,
  gradClassname: "Web2",
  favInstructor: "Tammy"
});


console.log(jack.speak());
console.log(david.demo("CSS"));
console.log(jeff.grade(jim, "HTML"));
console.log(jerry.listsSubjects());
console.log(jackie.PRAssignment("Javascript"));
console.log(jim.sprintChallenge("UX"));
console.log(jacob.standUp("Web19"));
console.log(mallorie.debugsCode("David", jim, "Ruby"))
