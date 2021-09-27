const express = require('express')
const cookieParser = require('cookie-parser');
const routes = require('./routes/index')
const app = express()

//middlewars 
app.use(cookieParser)
app.use(express.json())

//routes 
app.use('/api', routes)
module.exports = app