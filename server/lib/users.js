const connection = require('./connection')

// get database, make id a number and where the username field matches username input return the first matching user (if true)

function userExists(username, conn) {
  const db = connection || conn
  return db('users')
  .count('id as n')
  .where('username', username)
  .then(count => {
    return count[0].n > 0
  })
}

 //get database and insert a username into user field with a hashed password

function createUser(username, password, conn) {
  const db = connection || conn
  return db('users')
  .insert({username, hash: password})
}

module.exports = {
  userExists,
  createUser
}
