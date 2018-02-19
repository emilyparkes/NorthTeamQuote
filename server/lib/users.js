const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const knex = require('knex')(config)
const hash = require('../auth/hash')

// get database, make id a number and where the username field matches username input return the first matching user (if true)

function userExists(username, testDb) {
  const connection = testDb || knex
return connection('users')
  .count('id as n')
  .where('username', username)
  .then(count => {
    return count[0].n > 0
  })
}

 //get database and insert a username into user field with a hashed password

function createUser(username, password, testDb) {
  const connection = testDb || knex
  const pass = hash.generate(password)
  return connection('users')
    .insert({username, hash: pass})
}

function getUserByName (username, testDb) {
  const connection = testDb || knex
  return connection('users')
  .select()
  .where('username', username)
}

module.exports = {
  userExists,
  createUser,
  getUserByName

}
