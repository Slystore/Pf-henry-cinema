const server = require('./src/app')
const { conn } = require('./src/db.js');

conn.sync().then( () => { 
  console.log('BD conectada')
  server.listen(3001, () => console.log('hola1'))
})
.catch( (e) => console.log(e))