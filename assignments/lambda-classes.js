class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject){
        console.log(`${student} receives a perfect score on ${subject}.`);
    }
}

class Student extends Instructor {
    constructor(props){
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }
    listsSubjects(){
        //a method that logs out all of student's favSubjects one by one
        console.log(`${favSubjects}`);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(props){
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student}'s code on ${subject}`);
    }
}

const eric = new Student({
    name: 'Eric',
    age: 27,
    gender: 'Male',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    specialty: 'Learning'
});

const cJ = new Instructor({
    name: 'CJ',
    age: 30,
    gender: 'Male',
    favLanguage: 'React'
});

const atb = new ProjectManager({
    name: 'Andrew',
    gender: 'Male',
    location: 'Earth',
    gradClassName: 'WEB-19'
});


console.log(atb.gradClassName);
console.log(cJ.favLanguage);
console.log(cJ.grade('Eric', 'JavaScript Classes'));
console.log(eric.favSubjects);
console.log(atb.standUp('the BEST channel'));
console.log(atb.speak());