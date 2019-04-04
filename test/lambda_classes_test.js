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

// Create 2 - 3 objects for each class and test their attributes:

// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   gender: 'male',
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
