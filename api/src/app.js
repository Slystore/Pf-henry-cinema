const express = require('express')
const cookieParser = require('cookie-parser');
const routes = require('./routes/index')
const server = express()
const morgan = require('morgan')
const {conn} = require('./db')

//middlewars 
server.use(cookieParser())
server.use(morgan('dev'))
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
server.use(express.json())


//routes 
server.use('/api', routes)
conn.sync().then( () => { 
    console.log('BD conectada')
    server.listen(3001, () => console.log('hola1'))
})
.catch( (e) => console.log(e))

module.exports = server