// CODE here for your Lambda Classes
// ## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   gender: 'male',
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// ```

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`




class Person{
    constructor(base){
        this.name = base.name
        this.age = base.age
        this.location = base.location
        this.gender = base.gender
    }
    speak(){
        return(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}  

class Instructor extends Person{
    constructor(abils){
        super(abils)

        this.specialty = abils.specialty
        this.favLanguage = abils.favLanguage
        this.catchPhrase = abils.catchPhrase
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person{
    constructor(skills){
        super(skills)
        this.previousBackground = skills.previousBackground
        this.className = skills.className
        this.favSubjects = skills.favSubjects

    }
    listsSubjects(){
            this.favSubjects.forEach(function(subject){
            console.log(subject)
            })
         }
        PRAssignment(subject){
            return (`${this.name} has submitted PR for ${subject}`)
        }

        springChallenge(subject){
            return (`${this.name} has begun sprint challenge on ${subject}`)
        }
}

class ProjectManagers extends Instructor{
    constructor(talents){
        super(talents)
        this.gradClassName = talents.gradClassName
        this.favInstructor = talents.favInstructor
    }
    standUp(channel){
        return(`${this.name} announces to ${channel}`)
    }
    debugCode(student){
        return(`${name} debugs ${student.name}'s code on ${subject}`)
    }

}

let Brandon = new Student({
    "name": "brandon",
    "age" : 37,
    "location": "Minneapolis",
    "previousBackground" : "teacher",
    "className" : "webDev19",
    "favSubjects" : ["css","html","js"]
})

Brandon.listsSubjects()
console.log(Brandon.PRAssignment("CSS"))
console.log(Brandon.springChallenge("html"))
let Sam = new ProjectManagers({
    "name": "Sam",
    "age":37,
    "firstName": 'Fred',  
    "lastName": 'Flintstone',
    "location": 'Bedrock',
    "gender" : "M",
    "specialty" : "sword fighting",
    "favLanguage" : "Korean",
    "catchPhrase" : "You don't know me!",
    "gradClassName" : "wd-12",
    "favInstructor" : "Josh"

})

console.log(Sam.speak())

console.log(Brandon)
console.log(Sam)


const myPersonalObject = {  
    "firstName": 'Fred',  
    "lastName": 'Flintstone',
};  


const values =Object.values(myPersonalObject)

console.log(values)

let keys = Object.keys(myPersonalObject)
console.log(keys)

let entries = Object.entries(myPersonalObject)

console.log(entries)

let keyss = Object.keys(myPersonalObject)

let valuess = Object.values(myPersonalObject)

entries = Object.entries(myPersonalObject)