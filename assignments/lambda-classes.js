// CODE here for your Lambda Classes
/*
 * Lambda Classes assginment is to build virtual rooster of Lambda school personnel.
 */

const CONST_ADD = "ADD";
const CONST_SUB = "SUB";
/*
 * Creating the base class - Person
 * Class Name - Person
 * Params - personAttributes - This is an object which has name, age, location and gender
 * Methods - Speak()
 */

class Person {
  constructor(personAttributes) {
    this.pName = personAttributes.name;
    this.pAge = personAttributes.age;
    this.pLocation = personAttributes.location;
    this.pGender = personAttributes.gender;
  }
  // speak method
  speak() {
    return `Hello! my name is ${this.pName}`;
  }
}

/*
 * Creating the child class - Instructor
 * Class Name - Instructor
 * Extends - Parent
 * Params - instructorAttributes - This is an object which has name, age, location, gender, speciality, favLanguage and catchPhrase
 * Methods - demo(subject), grade(student, subject)
 */
class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.iSpeciality = instructorAttributes.speciality;
    this.iFavLanguage = instructorAttributes.favLanguage;
    this.iCatchPhrase = instructorAttributes.catchPhrase;
  }

  // demo() method
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  // grade method
  grade(student, subject) {
    return `${student.pName} receives a perfect score on ${subject}`;
  }

  //buildGrade method - gradeChangeIndicator takes in "ADD" to add and "SUB" to subtracT
  buildGrade(student, gradeChangeIndicator) {
    var gradeChange = Math.floor(Math.random() * 11);
    if (gradeChangeIndicator === CONST_ADD) {
      student.sGrade = student.sGrade + gradeChange;
    } else {
      student.sGrade = student.sGrade - gradeChange;
    }
    return `${student.pName}'s grade is ${student.sGrade}`;
  }
}

/*
 * Creating the child class - Student
 * Class Name - Student
 * Extends - Parent
 * Params - studentAttributes - This is an object which has name, age, location, gender, prevBackground, className and favSubjects
 * Methods - demo(subject), grade(student, subject)
 */
class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.sPrevBackground = studentAttributes.prevBackground;
    this.sClassName = studentAttributes.className;
    this.sFavSubjects = studentAttributes.favSubjects;
    this.sGrade = studentAttributes.grade;
  }

  // listsSubjects() method
  listsSubjects() {
    return this.sFavSubjects;
  }

  // PRAssignments method
  PRAssignment(subject) {
    return `${this.pName} has requested a PR on ${subject}`;
  }

  //graduate method
  graduate() {
    if (this.sGrade > 70) {
      return `Congratulations ${this.pName} on graduating from Lambda!`;
    } else {
      return `${this.pName} you need a little more work before graduation!`;
    }
  }
}

/*
 * Creating the child class - ProjectManager
 * Class Name - ProjectManager
 * Extends - Instructor
 * Params - pmAttributes - This is an object which has name, age, location, gender, speciality, favLanguage,
 *  catchPhrase, gradClassName and favInstructor
 * Methods - standUp(slackChannel), debugsCode(student, subject)
 */
class ProjectManager extends Instructor {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.pmGradClassName = pmAttributes.gradClassName;
    this.pmFavInstructor = pmAttributes.favInstructor;
  }

  // standUp(slackChannel) method
  standUp(slackChannel) {
    return `${this.pName} announces to ${slackChannel}, @channel standy times!`;
  }

  // debugCode(student, subject) method
  debugsCode(student, subject) {
    return `${this.pName} debugs ${student.pName}'s code on ${subject}`;
  }
}

// Object instantiation - Students - Shawn Spencer, Burton Guster, Buzz McNab, Woody Strode

const shawnSpencer = new Student({
  name: "Shawn Spencer",
  age: 25,
  location: "Santa Barbara",
  gender: "Male",
  prevBackground: "Hockey player",
  className: "WEB19",
  favSubjects: ["HTML", "CSS", "Python", "Geology", "Psychic"],
  grade: 80
});

const gusBurton = new Student({
  name: "Burton Guster",
  age: 25,
  location: "Santa Barbara",
  gender: "Male",
  prevBackground: "Sales Representative",
  className: "WEB19",
  favSubjects: ["Java", "JSP", "Ruby", "Medical Terminology", "Psychic"],
  grade: 90
});

const buzz = new Student({
  name: "Buzz McNab",
  age: 30,
  location: "Santa Barbara",
  gender: "Male",
  prevBackground: "Police Constable",
  className: "WEB19",
  favSubjects: ["DataScience", "Ruby"],
  grade: 75
});

const woody = new Student({
  name: "Wood Strode",
  age: 32,
  location: "Santa Barbara",
  gender: "Male",
  prevBackground: "Coroner",
  className: "WEB19",
  favSubjects: ["DS", "HTML", "OS"],
  grade: 65
});

// Object instantiation - Instructors - Karen Vick, Henry Spencer

const chiefVick = new Instructor({
  name: "Karen Vick",
  age: 42,
  location: "Santa Barbara",
  gender: "Female",
  speciality: "HTML",
  favLanguage: "Python",
  catchPhrase: "Get it done!"
});

const henry = new Instructor({
  name: "Henry Spencer",
  age: 50,
  location: "Santa Barbara",
  gender: "Male",
  speciality: "JS",
  favLanguage: "Java",
  catchPhrase: "Never say tomorrow!"
});

// Object instantiation - Project Managers - Carlton Lassiter, Juliet O'Hara

const lassie = new ProjectManager({
  name: "Carlton Lassiter",
  age: 45,
  location: "Santa Barbara",
  gender: "Male",
  gradClassName: "WEB17",
  favInstructor: "Karen Vick"
});

const ohara = new ProjectManager({
  name: "Juliet O'hara",
  age: 28,
  location: "Santa Barbara",
  gender: "Female",
  gradClassName: "WEB17",
  favInstructor: "Henry Spencer"
});

// INTRODUCTIONS
console.log(shawnSpencer.speak());
console.log(gusBurton.speak());
console.log(buzz.speak());
console.log(woody.speak());
console.log(chiefVick.speak());
console.log(henry.speak());
console.log(ohara.speak());
console.log(lassie.speak());

// CLASS ANNOUNCEMENTS
console.log(chiefVick.demo("JS"));
console.log(henry.demo("HTML"));

// STANDUP ANNOUNCEMENTS
console.log(ohara.standUp("WEB19-OHARA"));
console.log(lassie.standUp("WEB19-LASSITER"));

//STUDENTS LISTS SUBJECTS
console.log(shawnSpencer.listsSubjects());
console.log(gusBurton.listsSubjects());
console.log(buzz.listsSubjects());
console.log(woody.listsSubjects());

//STUDENTS SEND PRs
console.log(shawnSpencer.PRAssignment("HTML"));
console.log(gusBurton.PRAssignment("JS"));
console.log(buzz.PRAssignment("HTML"));
console.log(woody.PRAssignment("JS"));

//PROJECT MANAGERS DEBUG CODE
console.log(lassie.debugsCode(shawnSpencer, "HTML"));
console.log(ohara.debugsCode(gusBurton, "JS"));
console.log(lassie.debugsCode(buzz, "HTML"));
console.log(ohara.debugsCode(woody, "JS"));

//INSTRUCTOR GRADES THE STUDENTS
console.log(chiefVick.grade(woody, "JS"));
console.log(chiefVick.grade(gusBurton, "JS"));
console.log(henry.grade(shawnSpencer, "HTML"));
console.log(henry.grade(buzz, "HTML"));

// BUILD GRADE
console.log(chiefVick.buildGrade(woody, "SUB"));
console.log(chiefVick.buildGrade(gusBurton, "ADD"));
console.log(henry.buildGrade(shawnSpencer, "ADD"));
console.log(henry.buildGrade(buzz, "SUB"));

//ELIGIBLE TO GRADUATE
console.log(shawnSpencer.graduate());
console.log(gusBurton.graduate());
console.log(buzz.graduate());
console.log(woody.graduate());
