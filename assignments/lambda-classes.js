// CODE here for your Lambda Classes
// CODE here for your Lambda Classes
/*
 * Lambda Classes assginment is to build virtual rooster of Lambda school personnel.
 */

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
