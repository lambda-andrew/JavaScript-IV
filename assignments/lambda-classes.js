
class Person {
    constructor(attr) {
      this.name = attr.name;
      this.age = attr.age;
      this.location = attr.location;
    }
    speak() {
      return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
  }
  
  class Instructor extends Person {
    constructor(childAttr) {
      super(childAttr)
    this.subject = childAttr.subject;
    this.specialty = childAttr.specialty;
    this.favLang = childAttr.favLang;
    this.catchPhrase = childAttr.catchPhrase;}
    demo() {
      return `Today we are learning about ${this.subject}.`;
    }
    grade(){
      return `${this.name}receives a perfect score on ${this.subject}`;
    }
  }
  class Student extends Instructor {
    constructor(gchild) {
      super(gchild);
      this.student_name = gchild.student_name;
      this.prevBg = gchild.prevBg;
      this.className = gchild.className;
      this.favSub = gchild.favSub;}
  listsSubjects() {
    return `${this.favSub}`;
  }
    PRAssign() {
      return `${this.student_name} has submitted a PR for ${this.subject}`;
    }
  sprintChal(){
    return `${this.student_name} has begun sprint challenge on ${this.subject}`;
  }
  debugsCode(){
    return  `${this.name} debugs ${this.student_name}'s code on ${this.subject}`;
  }
  }
  
  const john = new Person({
    name: 'John',
    age: 35,
    location: 'Florida',
    
  });
  const sharron = new Instructor({
  name: 'sharron' ,
    subject: 'JavaScript'
  });
  
  const Jim = new Student({
    name: 'sharron',  
    subject: 'JavaScript',
    student_name: 'jim',
    prevBg: 'CSR',
    className:'web24',
    favSub: ['PHP', 'Python', 'Rest']
  });
  
  console.log(  john.speak());
  console.log(sharron.demo());
  console.log(Jim.listsSubjects());
  console.log(Jim.PRAssign());
  console.log(Jim.sprintChal());
  console.log(Jim.debugsCode());