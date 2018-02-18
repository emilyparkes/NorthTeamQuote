// server/routes/auth.js
const bodyParser = require('body-parser')
const express = require('express')
const verifyJwt = require('express-jwt')

const crypto = require('../lib/crypto')
const users = require('../lib/users')
const auth = require('../lib/auth')

const router = express.Router()

router.post('/register', 
register,
auth.issueJwt)

function register (req, res, next) {
  users.exists(req.body.username)
  .then(exists => {
    if (exists) {
   return res.status(400).send({message: 'User exists'})
 }
  users.create(req.body.username, req.body.password)
  .then(() => next())
})
.catch(err => {
  res.status(400).send({message: err.message})
})
}

module.exports = router