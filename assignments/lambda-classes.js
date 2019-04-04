// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}
// Instructor Class
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
        console.log(`${student.name} receives a perfect score on ${subject}!`);
    }
}
// Project Managers Class
class ProjectManager extends Instructor{
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @${channel} standy times!`);
    }
    debugsCode(student,subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}
// Student Class
class Student extends Person {
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listSubjects(){
        console.log(this.favSubjects.toString());
    }
    prAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
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
    favSubjects: ["kick flips","css animation","chillin"]
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



josh.speak();
josh.demo("the banjo");
josh.grade(preston,"JavaScript");
dan.speak();
dan.demo("React");
dan.grade(jenni,"design");

andrew.speak();
andrew.standUp("web19-ab");
andrew.debugsCode(cameron,"JS");
gary.speak();
gary.standUp("the-shell");
gary.debugsCode(tyler,"python");
samantha.speak();
samantha.standUp("mom's basement");
samantha.debugsCode(preston,"React");

preston.speak();
preston.listSubjects();
preston.prAssignment("Sprint15");
preston.sprintChallenge("Complete and Total Mastery");
tyler.speak()
tyler.listSubjects();
tyler.prAssignment();
tyler.sprintChallenge("Making Data Work for You!");
