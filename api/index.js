const server = require('./src/app')
const { conn, users } = require('./src/db.js');
const { moviesMocks } = require('./src/utils/mocks/movies-muckUp');
const { genresMockUp } = require('./src/utils/mocks/genres-mockUp.js');
const mockUps = require('./src/utils/mocks/users-mock')
const { PORT } = process.env;



conn.sync({ force: true })
    .then(async() => {
        const usersList = await users.findAll()

        console.log('DB connected!');
        server.listen(PORT, () => console.log(`Server listening`));
        await genresMockUp();
        await moviesMocks();
        if (usersList.length === 0) {
            await users.bulkCreate(mockUps);

        }
    })
    .catch((e) => console.log('Connection Failed!', e))