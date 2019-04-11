// CODE here for your Lambda Classes
class Person {
  constructor (Atts){
    this.name = Atts.name;
    this.age = Atts.age;
    this.location = Atts.location;
    this.gender = Atts.gender;
  }
  speak(){
    return console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}
class Instructor extends Person{
  constructor(Atts){
    super(Atts);
    this.specialty = Atts.specialty;
    this.favlanguage = Atts.favlanguage;
    this.catchphrase = Atts.catchphrase;
  }
  demo(subject){
    return console.log(`Today we are learning about ${subject}`);
  }
  grade(subject){
    return console.log(`${this.name} receives a perfect score on ${subject}`);
  }
}
class Students extends Person{
  constructor(Atts){
    super(Atts);
    this.previousBackground = Atts.previousBackground;
    this.className = Atts.className;
    this.favSubjects = Atts.favSubjects;
  }
  listsSubjects(){
    for (let i = 0 ;i < this.favSubjects.length;i++){
       console.log( this.favSubjects[i]);
    }
    //return console.log("1");
  }
  PRAssignment(subject){
    return console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject){
    return console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}
class Project_Managers extends Instructor{
  constructor(Atts){
    super(Atts);
    this.gradClassName = Atts.gradClassName;
    this.favInstructor = Atts.favInstructor;
  }
  standup(channel){
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
  }
  debugsCode(subject,name){
    return `${this.name} debugs ${name}'s code on ${subject}`
  }
}


const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});


const jack = new Students({
  name:"jack",
  location:"new york",
  age:30,
  gender: "male",
  favLanguage: "python",
  specialty: "Front-end",
  catchPhrase: "i'm hungary",
  previousBackground:"marketing",
  className: "web1",
  favSubjects:["cs","javascript","python"]
});


const josh = new Project_Managers({
  name:"josh",
  location:"ohio",
  age:35,
  gender: "male",
  favLanguage: "c",
  specialty: "back-end",
  catchPhrase: "bop bap",
  previousBackground:"education",
  className: "web4",
  favSubjects:"math",
  gradClassName: "web4",
  favInstructor: "fred"
})

console.log(josh.speak());
console.log(fred.demo("math"));
console.log(josh.grade("math"));
console.log(jack.listsSubjects());
console.log(jack.PRAssignment("cs"));
console.log(jack.sprintChallenge("cs"));
console.log(josh.standup("web3"));
console.log(josh.debugsCode("cs","need")); //need todo
