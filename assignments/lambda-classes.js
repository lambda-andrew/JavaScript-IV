// CODE here for your Lambda Classes

class Person {
    constructor(props){
        this.name = props.age;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.location;
    };

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
};


class Instructor extends Person {
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    };

    demo(subject) {
        return `Today we are learning about ${subject}` 
    };

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}` 
    };
};


class Student extends Person{
    constructor(props){
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
        this.gender = prop.location;
    };

    listsSubjects() {
        this.favSubjects.forEach(props => {
            console.log(props);
        });
    };

    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`
    };

    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}` 
    };
};


class ProjectManager extends Instructor {
    constructor(props){
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    };

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    };

    debugsCode()

};