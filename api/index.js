const server = require('./src/app')
const { conn } = require('./src/db.js');
const { PORT } = process.env;
// const seed = require('./seed');

// const { pruebaMockup } = require('./src/utils/mocks/prueba-mockup.js')
const { genresMockUp } = require('./src/utils/mocks/genres-mockUp.js');
const { moviesMocks } = require('./src/utils/mocks/movies-muckUp.js');
const { usersMockUp } = require('./src/utils/mocks/users-mock.js');
const { cinemasMockUp } = require('./src/utils/mocks/cinemas-mock');
const { cinemaRoomMockUp } = require('./src/utils/mocks/cinemaRooms-mock.js')
const { rolesMockUp } = require('./src/utils/mocks/roles-mockUp.js')

conn.sync({ force: true })
    .then(async() => {
        console.log('DB connected!');
        server.listen(PORT, () => console.log(`Server listening on port 3001`));
        // seed();

        await moviesMocks();
        await genresMockUp();
        await usersMockUp();
        await cinemasMockUp();
        await cinemaRoomMockUp();
        await rolesMockUp();
    })
    .catch((e) => console.log('Connection Failed!', e))