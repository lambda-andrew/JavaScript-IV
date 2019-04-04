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
}

class Instructor extends Person {
  constructor(param) {
    super(param)
  }
}

class Student extends Person {
  constructor(param) {
    super(param)
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
