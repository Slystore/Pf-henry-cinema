const server = require('./src/app');
const {conn} = require('../api/src/db')

conn.sync()
.then(() => {
    console.log('DB connected');
    server.listen(3001, () => console.log(`Server listening in 3001`))
})
.catch((e)=> console.log(e))