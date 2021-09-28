const express = require('express')
const cookieParser = require('cookie-parser');
const routes = require('./routes/index')
const server = express()
const {conn} = require('./db')

//middlewars 
server.use(cookieParser())
server.use(express.json())

//routes 
server.use('/api', routes)
conn.sync({ force: true}).then( () => { 
    console.log('BD conectada')
    server.listen(3001, () => console.log('hola1'))
})
.catch( (e) => console.log(e))

module.exports = server