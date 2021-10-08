const { users, cinemaRoom, cinemas, screening, seats, movies, genres, purchase } = require('./src/db')
const {moviesMocks} = require('./src/utils/mocks/movies-muckUp');
const {genresMockUp} = require('./src/utils/mocks/genres-mockUp.js');
const cinemaRoomMock = require('./src/utils/mocks/cinemaRooms-mock');
const cinemaMock = require('./src/utils/mocks/cinemas-mock');
const screeningMock = require('./src/utils/mocks/screening-mock');
const seatsMock = require('./src/utils/mocks/seats-mock');
const mockUps = require('./src/utils/mocks/users-mock')
const {purchaseMockUp}= require('./src/utils/mocks/purchase-mock');
const purchase2Mock = require ('./src/utils/mocks/purchase2-mock')


const seed = async () => {
    const usersList = await users.findAll()
    const cinemaRoomList = await cinemaRoom.findAll()
    const cinemaList = await cinemas.findAll()
    const screeningList = await screening.findAll()
    const seatsList = await seats.findAll()
    const moviesList = await movies.findAll()
    const genresList = await genres.findAll()
    const purchaseList = await purchase.findAll()
    

    if (usersList.length === 0) await users.bulkCreate(mockUps);
    if (cinemaRoomList.length === 0) await cinemaRoom.bulkCreate(cinemaRoomMock);
    if (cinemaList.length === 0) await cinemas.bulkCreate(cinemaMock);
    if (screeningList.length === 0) await screening.bulkCreate(screeningMock);
    if (seatsList.length === 0) await seats.bulkCreate(seatsMock);
    if (moviesList.length === 0) await moviesMocks();
    if (genresList.length === 0) await genresMockUp();
    if(purchaseList.length === 0) await purchase.bulkCreate(purchase2Mock);
   
}

module.exports = seed