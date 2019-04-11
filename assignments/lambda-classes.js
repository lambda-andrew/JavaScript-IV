// CODE here for your Lambda Classes

class Person {
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak () { 
        console.log(`hell my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructors extends Person {
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favlanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo (subject) {
        console.log(`today we are learning about ${this.subject}`);
    }
    grade (student, subject) {
        console.log(`${student.name} receives a perfect score on ${this.subject}`)
    }
}

class Student extends Person {
    constructor(props){
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }
    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${this.subject}`)
    }
    sprintChallange () {
        console.log(`${student.name} has begun sprint challange on ${subject}`)
    }
 }


 class ProjectManager extends Instructors () {
     constructor(props){
         this.gradClassName = props.gradClassName;
         this.favInstructor = props.favInstructor;
     }
     standup(){
         console.log(`${this.name} announces to ${this.channel}, @channel standy times!`);
     }
     debugsCode(){
         console.log(`${this.name} debugs ${student.name}'s code on ${this.subject}`);
     }
 }

 


