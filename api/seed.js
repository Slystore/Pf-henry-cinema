const { users, cinemaRoom, cinemas, screening, seats, movies, genres } = require('./src/db')
const {moviesMocks} = require('./src/utils/mocks/movies-muckUp');
const {genresMockUp} = require('./src/utils/mocks/genres-mockUp.js');
const cinemaRoomMock = require('./src/utils/mocks/cinemaRooms-mock');
const cinemaMock = require('./src/utils/mocks/cinemas-mock');
const screeningMock = require('./src/utils/mocks/screening-mock');
const seatsMock = require('./src/utils/mocks/seats-mock');
const mockUps = require('./src/utils/mocks/users-mock');
// const mock = require('./src/utils/mocks/prueba')

const seed = async () => {
    const usersList = await users.findAll()
    const cinemaRoomList = await cinemaRoom.findAll()
    const cinemaList = await cinemas.findAll()
    const screeningList = await screening.findAll()
    const seatsList = await seats.findAll()
    const moviesList = await movies.findAll()
    const genresList = await genres.findAll()
    
    if (usersList.length === 0) await users.bulkCreate(mockUps);
    if (cinemaRoomList.length === 0) await cinemaRoom.bulkCreate(cinemaRoomMock);
    if (cinemaList.length === 0) await cinemas.bulkCreate(cinemaMock);
    if (screeningList.length === 0) await screening.bulkCreate(screeningMock);
    if (seatsList.length === 0) await seats.bulkCreate(seatsMock);
    // if (moviesList.length === 0) await movies.bulkCreate(mock)
    if (genresList.length === 0) await genresMockUp();
    if (genresList.length === 0) await moviesMocks();
}


// const moviesBulk = async () => {
    
// try {
//     // const getFreeGuy = await genres.findAll({
//     //     where: { id: [4, 1, 2, 15] },
//     //     // attributes: ['id']
//     // })

//     // let query1 = await movies.findOne({
//     //     where: { title: 'Free Guy' }
//     // })
    
//     // const movie = await movies.findAll()
//     // console.log(query1)

//     // const getSnakeEyes = await genres.findAll({
//     //     where: { id: [1, 2] },
//     //     attributes: ['id']
//     // })
    
//     // let query2 = await movies.findAll({
//     //     where: { title: mock[1].title }
//     // })
    
//     // const getOld = await genres.findAll({
//     //     where: { id: [13, 17, 11] },
//     //     attributes: ['id']
//     // })
    
//     // let query3 = await movies.findAll({
//     //     where: { title: mock[2].title }
//     // })

//     // const getShangChi = await genres.findAll({
//     //     where: { id: [13, 17, 11] },
//     //     attributes: ['id']
//     // })
    
//     // let query4 = await movies.findAll({
//     //     where: { title: mock[3].title }
//     // })
 
//     // const getSuicideSquad = await genres.findAll({
//     //     where: { id: [1, 2, 9, 4] },
//     //     attributes: ['id']
//     // })
    
//     // let query5 = await movies.findAll({
//     //     where: { title: mock[4].title }
//     // })
 
//     // const getCatchTheBullet = await genres.findAll({
//     //     where: { id: [19, 1] },
//     //     attributes: ['id']
//     // })
    
//     // let query6 = await movies.findAll({
//     //     where: { title: mock[5].title }
//     // })
    
//     // const getBacNord = await genres.findAll({
//     //     where: { id: [5, 17] },
//     //     attributes: ['id']
//     // });
    
//     // let query7 = await movies.findAll({
//     //     where: { title: mock[6].title }
//     // })
  
//     // const getKate = await genres.findAll({
//     //     where: { id: [1, 17] },
//     //     attributes: ['id']
//     // });
    
//     // let query8 = await movies.findAll({
//     //     where: { title: mock[7].title }
//     // })
   
//     // const getSasRedNotice = await genres.findAll({
//     //     where: { id: [1, 17] },
//     //     attributes: ['id']
//     // });
    
//     // let query9 = await movies.findAll({
//     //     where: { title: mock[8].title }
//     // })
  
//     // const getJungleCruise = await genres.findAll({
//     //     where: { id: [1, 17] },
//     //     attributes: ['id']
//     // });
    
//     // let query10 = await movies.findAll({
//     //     where: { title: mock[9].title }
//     // })
    
//     // const getJurassicHnt = await genres.findAll({
//     //     where: { id: [1, 15, 17] },
//     //     attributes: ['id']
//     // })
//     // let query11 = await movies.findAll({
//     //     where: { title: mock[10].title }
//     // })
    
//     // const getF9 = await genres.findAll({
//     //     where: { id: [1, 5, 17] },
//     //     attributes: ['id']
//     // })
    
//     // let query12 = await movies.findAll({
//     //     where: { title: mock[11].title }
//     // })
    
//     // const getPawPtrol = await genres.findAll({
//     //     where: { id: [3, 8, 2, 4] },
//     //     attributes: ['id']
//     // })
//     // let query13 = await movies.findAll({
//     //     where: { title: mock[12].title }
//     // })
   
//     // const getEscapeRoom = await genres.findAll({
//     //     where: { id: [1, 17, 13] },
//     //     attributes: ['id']
//     // })
//     // let query14 = await movies.findAll({
//     //     where: { title: mock[13].title }
//     // })
    
//     // const getLuca = await genres.findAll({
//     //     where: { id: [3, 4, 8, 9] },
//     //     attributes: ['id']
//     // })
//     // let query15 = await movies.findAll({
//     //     where: { title: mock[14].title }
//     // })
    
//     // const getTheBossBaby = await genres.findAll({
//     //     where: { id: [3, 4, 2, 8] },
//     //     attributes: ['id']
//     // })
//     // let query16 = await movies.findAll({
//     //     where: { title: mock[15].title }
//     // })
   
//     // const getSpaceJam = await genres.findAll({
//     //     where: { id: [3, 4, 8, 15] },
//     //     attributes: ['id']
//     // })
    
//     // let query17 = await movies.findAll({
//     //     where: { title: mock[16].title }
//     // })
    
//     // const getMalignant = await genres.findAll({
//     //     where: { id: [11, 17, 13, 5] },
//     //     attributes: ['id']
//     // })
    
//     // let query18 = await movies.findAll({
//     //     where: { title: mock[17].title }
//     // })
  
//     // const getTomorrowWar = await genres.findAll({
//     //     where: { id: [1, 15, 2] },
//     //     attributes: ['id']
//     // })
//     // let query19 = await movies.findAll({
//     //     where: { title: mock[18].title }
//     // })
    
//     // const getDontBreatheTwo = await genres.findAll({
//     //     where: { id: [17, 11] },
//     //     attributes: ['id']
//     // })
//     // let query20 = await movies.findAll({
//     //     where: { title: mock[19].title }
//     // })
    
    
        
//     // await query1.addgenres(getFreeGuy);
//     // await query2.addGenres(getSnakeEyes);
//     // await query3.addGenres(getOld);
//     // await query4.addGenres(getShangChi);
//     // await query5.addGenres(getSuicideSquad);
//     // await query6.addGenres(getCatchTheBullet);
//     // await query7.addGenres(getBacNord);
//     // await query8.addGenres(getKate);
//     // await query9.addGenres(getSasRedNotice);
//     // await query10.addGenres(getJungleCruise);
//     // await query11.addGenres(getJurassicHnt);
//     // await  query12.addGenres(getF9);
//     // await query13.addGenres(getPawPtrol);
//     // await  query14.addGenres(getEscapeRoom);
//     // await query15.addGenres(getLuca);
//     // await query16.addGenres(getTheBossBaby);
//     // await query17.addGenres(getSpaceJam);
//     // await query18.addGenres(getMalignant);
//     // await query19.addGenres(getTomorrowWar);
//     // await  query20.addGenres(getDontBreatheTwo);
  
    
// } catch(error) {
//     console.log(error)
// }
// }



module.exports = {seed, }

 // let movieCreate
    
    //  for (let i = 0; i < mock.length; i++) {
    //     let { title, image, description, actors, director, rating, votes, usersRating, availability, price, runTime } = mock[i];
        
    //     movieCreate = await movies.create({
    //                 title,
    //                 rating,
    //                 description,
    //                 actors,
    //                 director,
    //                 usersRating,
    //                 votes,
    //                 availability,
    //                 price,
    //                 image,
    //                 runTime,
    //     })}    
  

  