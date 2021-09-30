const server = require('./src/app')
const { conn } = require('./src/db.js');
conn.sync({force:true}).then( () => { 
  console.log('conectada la db')
  server.listen(3001, () => console.log('listen on port 3001'))
})
.catch( (e) => console.log('yo estoy rompiendo',e))
