const express = require('express')
const cookieParser = require('cookie-parser');
const routes = require('./routes/index')
const server = express()
const morgan = require('morgan')
const cors = require('./controllers/cors-controller')
const errors = require('./controllers/errorHandling')


//middlewars 
server.use(cookieParser())
server.use(morgan('dev'))
server.use(cors);
server.use(express.json())
server.use(errors)


//routes 
server.use('/api', routes)

module.exports = server