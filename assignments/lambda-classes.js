'use strict'

/**
 * Define classes
 */

class Person {
  constructor(param) { }
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
