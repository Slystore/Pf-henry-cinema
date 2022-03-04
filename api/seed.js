const { users, movies, genres, cinemas, cinemaRoom, screening, shows, seats } = require('./src/db')
const data = require('./src/utils/mocks/cinesUltimo')
const dataMovies = require('./src/utils/mocks/moviesUltimo')

const postCinemaSeed = async() => {
    try {
        data.forEach( async (el) => {
            let { name, location, salas } = el
            const [createCinema, created] = await cinemas.findOrCreate({
                where: { name, location }
            })
    
            if (created) {
    
                salas.forEach(async(el) => {
                        let { name, seatCount } = el
                        const roomCreate = await cinemaRoom.create({ name, seatCount })
                        await createCinema.addCinemaRoom(roomCreate)
                    })
            } else {
                const query = await cinemas.findOne({
                    where: {
                        name
                    }
                })
                salas.forEach(async(el) => {
                    let { name, seatCount } = el
                    const [create, notCreate] = await cinemaRoom.findOrCreate({
                        where: { name, seatCount }
                    })
                    if (create) await query.addCinemaRoom(create)
                })
            }
        })
    } catch (error) {
        console.log(error)
    }
}


const moviePostSeed = async() => {
    try {
        let genresDb, cinemaDb, cinemaRoomsDb, screeningDb, showCreation;
        // console.log(req.body)
        let title, rating, description, actors,director, usersRating,votes, availability,price,image, runTime, genre,showList

        dataMovies.forEach(async (el) => {
             ({
                title,
                rating,
                description,
                actors,
                director,
                usersRating,
                votes,
                availability,
                price,
                image,
                runTime,
                genre,
               showList
            } = el);
    // console.log(showList)
            let movieCreated = await movies.create({
                title,
                rating,
                description,
                actors,
                director,
                usersRating,
                votes,
                availability,
                price,
                image,
                runTime,
            });

            //Por cada elemento del array genre que viene por body se busca la coincidencia en la tabla de genres y se hace una asociacion
    
            for (let i = 0; i < genre.length; i++) {
                genresDb = await genres.findAll({
                   where: {
                       name: genre[i].name,
                   },
                   attributes: ['id']
               });
               
               movieCreated.addGenres(genresDb) 
            }

            // for (let i = 0; i < showList.length; i++) {
            //     // Paso 1: de cada objetito averiguamos en modelos de cinema, cinemaRoom y screening
                
            //      cinemaDb = await cinemas.findOne({
            //         where: {
            //             id: showList[i].cinemaId,
            //         },
            //     });
        
            //      cinemaRoomsDb = await cinemaRoom.findOne({
            //         where: {
            //             id: showList[i].cinemaRoomId,
            //         },
            //     });
        
            //      screeningDb = await screening.findOne({
            //         where: {
            //             id: showList[i].screeningId,
            //         },
            //     });
    
            //     // //Paso 2: creo un show
    
            //      showCreation = await shows.create();
    
            //      await cinemaDb.addShow(showCreation)
            //     await cinemaRoomsDb.addShow(showCreation)
            //     await screeningDb.addShow(showCreation)
                // await movieCreated.addShow(showCreation)
    
                //Paso 3: Busco el cinemaRoom que hace referencia el objeto 
                //que estoy iterando y me fijo el valor del atributo SeatCount. (va a ser 50)
    
            //     const seatCountQuery = await cinemaRoom.findOne({
            //         where: {
            //             id: showList[i].cinemaRoomId
            //         },
            //         attributes: ['seatCount'],
            //     })
    
            //     let array = []
    
            //     // creo tantas instancias de seat como capacidad de asientos tenga esa sala
           
            //     for (let i = 0; i < 55; i++) array.push(i)
    
            //     let newSeat;
            //     let aux = 0
    
            //     array.forEach( async el => {
            //         try {
            //             newSeat = await seats.create({number: ++aux})
            //             await newSeat.setShow(showCreation)   
            //         } catch (error) {
            //             console.log(error)
            //         }
            //     })
                
            // }
        })



    } catch (err) {
        console.log(err)
    }
};


//-----------------------------------------------------------------------------------------------
// const { movies, genres, cinemas, cinemaRoom, screening, shows, seats } = require("../../db");

// const moviePost2 = async(req, res, next) => {
//     try {
//         let {
//             title,
//             rating,
//             description,
//             actors,
//             director,
//             usersRating,
//             votes,
//             availability,
//             price,
//             image,
//             runTime,
//             genre,
//             showList
//         } = req.body;

//         let movieCreated = await movies.create({
//             title,
//             rating,
//             description,
//             actors,
//             director,
//             usersRating,
//             votes,
//             availability,
//             price,
//             image,
//             runTime,
//             genre,
//             // cinemaId,
//             // cinemaRoomId,
//             // screeningTime
//         });

//         const genresDb = await genres.findAll({
//             where: {
//                 name: genre,
//             },
//             attributes: ['id']
//         });

//         const cinemaDb = await cinemas.findAll({
//             where: {
//                 name: cinemaId,
//             },
//             attributes: ['id']
//         });

//         const cinemaRoomsDb = await cinemaRoom.findAll({
//             where: {
//                 id: cinemaRoomId,
//             },
//             attributes: ['id']
//         });

//         const screeningDb = await screening.findOne({
//             where: {
//                 time: screeningTime,
//             },
//             through: {
//                 attributes: ['id'],
//             },
//         });

//         await movieCreated.addGenres(genresDb)
//         await movieCreated.addCinemas(cinemaDb)
//         await movieCreated.addCinemaRooms(cinemaRoomsDb)
//         await movieCreated.addScreenings(screeningDb)

//         res.status(200).json(movieCreated);
//     } catch (err) {
//         next(err)
//     }
// };

// module.exports = moviePost2
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

module.exports = {postCinemaSeed, moviePostSeed}