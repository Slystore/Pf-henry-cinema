const server = require('./src/app')
const { conn } = require('./src/db.js');
const { PORT } = process.env;

// const seed = require('./seed');

// const { moviesList } = require('./src/utils/mocks/movies-mockUp.js');
const { prueba } = require('./src/utils/mocks/prueba.js')

const { genresMockUp } = require('./src/utils/mocks/genres-mockUp.js');
const { usersMockUp } = require('./src/utils/mocks/users-mock.js');
const { rolesMockUp } = require('./src/utils/mocks/roles-mockUp.js');
const { cinemasMockUp } = require('./src/utils/mocks/cinemas-mock.js');
const { cinemaRoomMockUp } = require('./src/utils/mocks/cinemaRooms-mock.js');
const { screeningMockUpKaia, screeningMockUpLeta, screeningMockUpClark  } = require('./src/utils/mocks/screening-mock.js');
const { seatsMockUp } = require('./src/utils/mocks/seats-mock.js');


conn.sync({ force: true })
    .then(async() => {
        console.log('DB connected!');

        server.listen(PORT, () => console.log(`Server listening on port 3001`));
        // seed();

        await genresMockUp();
        await usersMockUp();
        await rolesMockUp();
        await screeningMockUpKaia();
        await screeningMockUpLeta();
        await screeningMockUpClark();
        await seatsMockUp();
        await cinemaRoomMockUp();
        await cinemasMockUp();
        await prueba();
        // await moviesList();
    })
    .catch((e) => console.log('Connection Failed!', e))