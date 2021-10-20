const express = require('express')
const cookieParser = require('cookie-parser');
const routes = require('./routes/index')
const server = express()
const morgan = require('morgan')
const corsc = require('cors')
const cors = require('./controllers/cors-controller')
const errors = require('./controllers/errorHandling')


//middlewars 
server.use(cookieParser())
server.use(morgan('dev'))
server.use(corsc())
server.use(cors);
server.use(express.json())
server.use(errors)
server.use(corsc())

//routes 
server.use('/api', routes)

module.exports = server
