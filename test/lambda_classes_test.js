'use strict'

/**
 * Dependencies
 */

const test = require('ava')
const lambda_classes = require('../assignments/lambda-classes')

/**
 * Constants
 */

const Person = lambda_classes.Person
const Instructor = lambda_classes.Instructor
const Student = lambda_classes.Student
const ProjectManagers = lambda_classes.ProjectManagers

/**
 * Assertions
 */

test('Person parameters', t => {
  let john = new Person({ name: "John", age: 30, location: "Texas", gender: "Male"})

  t.is(john.name, "John")
  t.is(john.age, 30)
  t.is(john.location, "Texas")
  t.is(john.gender, "Male")
})

test('Person speak function', t => {
  let john = new Person({ name: "John", age: 30, location: "Texas", gender: "Male"})

  t.is(john.speak(), 'Hello my name is John, I am from Texas.')
})

test('Instructor parameters', t => {
  let john = new Instructor({
    name: "John", age: 30, location: "Texas", gender: "Male",
    specialty: "redux", favLanguage: "JavaScript", catchPhrase: "Don't forget the homies"
  })

  // Inherited properties
  t.is(john.name, "John")
  t.is(john.age, 30)
  t.is(john.location, "Texas")
  t.is(john.gender, "Male")

  // Unique properties
  t.is(john.specialty, "redux")
  t.is(john.favLanguage, "JavaScript")
  t.is(john.catchPhrase, "Don't forget the homies")
})

test('Student parameters', t => {
  let jane = new Student({
    name: "Jane", age: 30, location: "Texas", gender: "Female",
    previousBackground: "Scuba Instructor", className: "DS19", favSubjects: ['Html', 'CSS', 'JavaScript']
  })

  // Inherited properties
  t.is(jane.name, "Jane")
  t.is(jane.age, 30)
  t.is(jane.location, "Texas")
  t.is(jane.gender, "Female")

  // Unique properties
  t.is(jane.previousBackground, "Scuba Instructor")
  t.is(jane.className, "DS19")
  t.truthy(jane.favSubjects.includes("CSS"))
})
