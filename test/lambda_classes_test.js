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

test('Add tests!', t => {
  t.pass()
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
