const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const passport = require('passport')

const server = express()

server.use(express.static(path.join(__dirname, '../public')))
server.use(bodyParser.json())
server.use(passport.initialize())

server.use('/api/v1/auth', authRoutes)

module.exports = server
