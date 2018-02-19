const jwt = require('jsonwebtoken')

const db = require('../lib/users')

module.exports = {
  issue
}

function issue (req, res, next) {
  const name = req.body.username
  db.getUserByName(name)
  .then(user => {
    const token = createToken(user, process.env.JWT_SECRET)
    res.json({
      message: 'Authentication successful.',
      token
    })
  })
}

function createToken (user, secret) {
  return jwt.sign({
    id: user.id,
    username: user.username
  }, secret, {
    expiresIn: '1d'
  })
}