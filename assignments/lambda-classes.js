// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}
class Instructor extends Person{
    constructor(instAttributes){
        super(instAttributes);
        this.specialty = instAttributes.specialty;
        this.favLanguage = instAttributes.favLanguage;
        this.catchPhrase = instAttributes.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}!`);
    }
    grade(student,subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}
class Student extends Person {
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listSubjects(){
        console.log(studentAttributes.favSubjects.forEach());
    }
    prAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}.`);
    }
}
class ProjectManager extends Instructor{
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel){
        console.log(`${name} announces to ${channel}, @${channel} standy times!`);
    }
    debugsCode(student,subject){
        console.log(`${name} debugs ${student.name}'s code on ${subject}.`);
    }
}

// Instructors
const josh = new Instructor({
    name: "Josh Knell",
    age: 37,
    location: "an alternate reality",
    gender: "male",
    specialty: "Teaching",
    favLanguage: "JavaScript",
    catchPhrase: "What the freak!?"
});

const dan = new Instructor({
    name: "Dan",
    age: 40,
    location: "the Future",
    gender: "male",
    specialty: "Being awesome" ,
    favLanguage: "ALL OF THEM",
    catchPhrase: "Don't forget to save."
});

// Project Managers

const andrew = new ProjectManager({
    name: "Andrew Benedict",
    age: 48,
    location: "a place outside of time",
    gender: "male",
    specialty: "Guidance",
    favLanguage: "React",
    catchPhrase: "You can do it",
    gradClassName: "Web18",
    favInstructor: "Living life",
});

const gary = new ProjectManager({
    name: "Gary",
    age: 24,
    location: "Bikini Bottom",
    gender: "male",
    specialty: "poetry",
    favLanguage: "C++",
    catchPhrase: "meow",
    gradClassName: "Ux17",
    favInstructor: "Mrs. Puff",
});

const samantha = new ProjectManager({
    name: "Samantha" ,
    age: 37,
    location: "Alaska",
    gender: "female",
    specialty: "wrestling bears",
    favLanguage: "HTML5",
    catchPhrase: "Check this out.",
    gradClassName: "Web18",
    favInstructor: "Josh",
});

// Students

const preston = new Student({
    name: "Preston",
    age: "28",
    location: "Oregon",
    gender: "male",
    previousBackground: "Coffee",
    className: "Web19",
    favSubjects: [".less", "HTML5", "BootStrap", "CSS3"]  
});

const jenni = new Student({
    name: "Jennifer",
    age: 27,
    location: "Oregon",
    gender: "female",
    previousBackground: "Anthropology",
    className: "Ux20",
    favSubjects: ["design", "color theory", "form and function"]
});

const cameron = new Student({
    name: "Cameron",
    age: 30,
    location: "Kansas",
    gender: "male",
    previousBackground: "skateboarder",
    className: "ios20",
    favSubjects: ["kick flips","css animation","chillin'"]
});

const tyler = new Student({
    name: "Tyler",
    age: 26,
    location: "Oregon",
    gender: "male",
    previousBackground: "Hospitality",
    className: "Data Science",
    favSubjects: ["data structure","algorithms","deep learning"]
});

