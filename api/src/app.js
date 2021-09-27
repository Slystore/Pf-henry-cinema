const express = require('express')
const cookieParser = require('cookie-parser');
const routes = require('./routes/index')
const server = express()

//middlewars 
server.use(cookieParser)
server.use(express.json())

//routes 
server.use('/api', routes)
module.exports = server