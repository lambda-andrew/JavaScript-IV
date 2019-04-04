'use strict'

/**
 * Define classes
 */

class Person {
  constructor(param) {
    this.name = param.name
    this.age = param.age
    this.location = param.location
    this.gender = param.gender
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`
  }
}

class Instructor extends Person {
  constructor(param) {
    super(param)
    this.specialty = param.specialty
    this.favLanguage = param.favLanguage
    this.catchPhrase = param.catchPhrase
  }

  demo(subject) {
    return `Today we are learning about ${subject}`
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`
  }
}

class Student extends Person {
  constructor(param) {
    super(param)
    this.previousBackground = param.previousBackground
    this.className = param.className
    this.favSubjects = param.favSubjects
  }

  listsSubjects() {
    this.favSubjects.forEach(subject => console.log(subject))
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`
  }
}

class ProjectManager extends Instructor {
  constructor(param) {
    super(param)
  }
}

/**
 * Export classes
 */

module.exports = {
  Person: Person,
  Instructor: Instructor,
  Student: Student,
  ProjectManager: ProjectManager,
}
