const server = require('./src/app')
const { conn } = require('./src/db.js');
const { PORT } = process.env;
const seed = require('./seed')



conn.sync({ force: true })
    .then(async() => {
        console.log('DB connected!');
        server.listen(PORT, () => console.log(`Server listening`));
        seed()
    })
    .catch((e) => console.log('Connection Failed!', e))