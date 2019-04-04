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
