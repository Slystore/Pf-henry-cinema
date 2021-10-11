// const { users, cinemaRoom, cinemas, screening, seats, movies, genres } = require('./src/db')
// const cinemaRoomMock = require('./src/utils/mocks/cinemaRooms-mock');
// const cinemaMock = require('./src/utils/mocks/cinemas-mock');
// const screeningMock = require('./src/utils/mocks/screening-mock');
// const seatsMock = require('./src/utils/mocks/seats-mock');
// const mockUps = require('./src/utils/mocks/users-mock')


// const seed = async() => {
//     const usersList = await users.findAll()
//     const cinemaRoomList = await cinemaRoom.findAll()
//     const cinemaList = await cinemas.findAll()
//     const screeningList = await screening.findAll()
//     const seatsList = await seats.findAll()
//     const moviesList = await moviesMocks();
//     const genresList = await genresMockUp();
//     // if (usersList.length === 0) await users.bulkCreate(mockUps);
//     // if (cinemaRoomList.length === 0) await cinemaRoom.bulkCreate(cinemaRoomMock);
//     // if (cinemaList.length === 0) await cinemas.bulkCreate(cinemaMock);
//     // if (screeningList.length === 0) await screening.bulkCreate(screeningMock);
//     // if (seatsList.length === 0) await seats.bulkCreate(seatsMock);

//     if (usersList.length === 0) await moviesMocks();
//     await genresMockUp();
//     await usersMockUp();
//     await rolesMockUp();
//     await cinemasMockUp();
//     await cinemaRoomMockUp();
//     await screeningMockUp();
//     await seatsMockUp();
// }

// module.exports = seed