
const { movies, genres, cinemas, cinemaRoom, screening, shows, seats } = require("../../db");



const moviePost2 = async(req, res, next) => {
    try {
        let genresDb, cinemaDb, cinemaRoomsDb, screeningDb, showCreation;
        console.log(req.body)
        let {
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
        } = req.body;

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

        for (let i = 0; i < showList.length; i++) {
            // Paso 1: de cada objetito averiguamos en modelos de cinema, cinemaRoom y screening
            
             cinemaDb = await cinemas.findOne({
                where: {
                    id: showList[i].cinemaId,
                },
            });
    
             cinemaRoomsDb = await cinemaRoom.findOne({
                where: {
                    id: showList[i].cinemaRoomId,
                },
            });
    
             screeningDb = await screening.findOne({
                where: {
                    id: showList[i].screeningId,
                },
            });

            // //Paso 2: creo un show

             showCreation = await shows.create();

             await cinemaDb.addShow(showCreation)
            await cinemaRoomsDb.addShow(showCreation)
            await screeningDb.addShow(showCreation)
            await movieCreated.addShow(showCreation)

            //Paso 3: Busco el cinemaRoom que hace referencia el objeto 
            //que estoy iterando y me fijo el valor del atributo SeatCount. (va a ser 50)

            const seatCountQuery = await cinemaRoom.findOne({
                where: {
                    id: showList[i].cinemaRoomId
                },
                attributes: ['seatCount'],
            })

            let array = []

            // creo tantas instancias de seat como capacidad de asientos tenga esa sala
       
            for (let i = 0; i < 55; i++) array.push(i)

            let newSeat;
            let aux = 0

            array.forEach( async el => {
                try {
                    newSeat = await seats.create({number: ++aux})
                    await newSeat.setShow(showCreation)   
                } catch (error) {
                    console.log(error)
                }
            })
            
        }

        movieCreated ?
        res.status(200).json({message: 'The movie has been created successfully"'}):
        res.status(404).json({message: `Error: the movie wasn't created`})
    } catch (err) {
        next(err)
    }
};

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

module.exports = moviePost2