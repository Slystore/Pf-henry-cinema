const server = require('./src/app')
const dotenv = require('dotenv')
dotenv.config();

const { conn } = require('./src/db.js');
const { PORT } = process.env;

// const seed = require('./seed');
const { moviesMock } = require('./src/utils/mocks/movies-mockUp.js')
const { genresMockUp } = require('./src/utils/mocks/genres-mockUp.js');
const { usersMockUp } = require('./src/utils/mocks/users-mock.js');
const { rolesMockUp } = require('./src/utils/mocks/roles-mockUp.js');
const { cinemasMockUp } = require('./src/utils/mocks/cinemas-mock.js');
const { cinemaRoomMockUp } = require('./src/utils/mocks/cinemaRooms-mock.js');
const { screeningMockUpKaia, screeningMockUpLeta, screeningMockUpClark } = require('./src/utils/mocks/screening-mock.js');
const { seatsMockUp } = require('./src/utils/mocks/seats-mock.js');

conn.sync({ force: true })
    .then(async() => {
        console.log('DB connected!');

        server.listen(PORT, () => console.log(`Server listening on port 3001`));
        // seed();

        await genresMockUp();
        await cinemasMockUp();
        await cinemaRoomMockUp();
        await screeningMockUpKaia();
        await screeningMockUpLeta();
        await screeningMockUpClark();
        await seatsMockUp();
        await moviesMock();
        await usersMockUp();
        await rolesMockUp();
    })
    .catch((e) => console.log('Connection Failed!', e))