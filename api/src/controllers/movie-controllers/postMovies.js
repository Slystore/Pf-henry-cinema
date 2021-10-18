const { movies, genres, cinemas, cinemaRoom, screening, shows, seats } = require("../../db");



const moviePost2 = async(req, res, next) => {
    try {
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

        let genresDb = await genres.findAll({
            where: {
                name: genre,
            },
            attributes: ['id']
        });

        movieCreated.addGenres(genresDb)

        let cinemaDb, cinemaRoomsDb, screeningDb, showCreation;

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

             await cinemaDb.addShows(showCreation)
            await cinemaRoomsDb.addShows(showCreation)
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
       
            for (let i = 0; i < 50; i++) array.push(i)

            let newSeat

            array.forEach( async el => {
                try {
                    newSeat = await seats.create()
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
//             cinema,
//             sala,
//             screening
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
//         });

//         let genresDb = await genres.findAll({
//             where: {
//                 name: genre,
//             },
//             attributes: ['id']
//         });

//         let cinemaDb = await cinemas.findAll({
//             where: {
//                 name: cinema,
//             },
//             attributes: ['id']
//         });

//         let cinemaRoomsDb = await cinemaRoom.findAll({
//             where: {
//                 name: sala,
//             },
//             attributes: ['id']
//         });

//         let screeningDb = await screening.findAll({
//             where: {
//                 time: screening,
//             },
//             attributes: ['id']
//         });

//         movieCreated.addGenres(genresDb)
//         movieCreated.addCinemas(cinemaDb)
//         movieCreated.addCinemaRooms(cinemaRoomsDb)
//         movieCreated.addScreenings(screeningDb)
//         res.status(200).send(movieCreated);
//     } catch (err) {
//         next(err)
//     }
// };

module.exports = moviePost2