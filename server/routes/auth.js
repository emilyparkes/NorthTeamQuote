// server/routes/auth.js
const bodyParser = require('body-parser')
const express = require('express')
const verifyJwt = require('express-jwt')
// const {userExists, createUser} = require('../lib/users')
const crypto = require('../lib/crypto')
const users = require('../lib/users')
const auth = require('../lib/auth')

const router = express.Router()

router.get('/register', (req, res) => {
  res.send({test: "hello"})
})

router.post('/register', 
register)
// auth.issueJwt)

function register (req, res, next) {
  users.userExists(req.body.username)
  .then(exists => {
    if (exists) {
   return res.status(400).send({message: 'User exists'})
 }
  users.createUser(req.body.username, req.body.password)
  // .then(() => next())
  .then(user => {
    res.send(user)
  })
})
.catch(err => {
  res.status(400).send({message: err.message})
})
}

module.exports = router