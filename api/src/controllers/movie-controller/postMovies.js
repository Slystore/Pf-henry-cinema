const { movies, genres, cinemas, cinemaRoom, screening } = require("../../db");

// const moviePost = async(req, res, next) => {
//     try {
//         let {
//             title,
//             rating,
//             usersRating,
//             availability,
//             price,
//             image,
//             description,
//             runTime,
//             genre,
//         } = req.body;

//         let movieCreated = await movies.create({
//             title,
//             rating,
//             usersRating,
//             availability,
//             price,
//             image,
//             description,
//             runTime,
//         });
//         let genresDb = await genres.findAll({
//             where: {
//                 name: genre,
//             },
//             attributes: ['id']

//         });
//         await movieCreated.addGenres(genresDb);
//         res.status(200).send(movieCreated);
//     } catch (err) {
//         next(err)
//     }
// };

const moviePost2 = async(req, res, next) => {
    try {
        let {
            title,
            rating,
            usersRating,
            votes,
            availability,
            price,
            image,
            description,
            runTime,
            genero,
            cinema,
            salas,
            funcion
        } = req.body;

        let movieCreated = await movies.create({
            title,
            rating,
            usersRating,
            votes,
            availability,
            price,
            image,
            description,
            runTime,
        });

        console.log(req.body)

        let genresDb = await genres.findAll({
            where: {
                name: genero,
            },
            attributes: ['id']
        });

        let cinemaDb = await cinemas.findAll({
            where: {
                name: cinema,
            },
            attributes: ['id']
        });

        let cinemaRoomsDb = await cinemaRoom.findAll({
            where: {
                name: salas,
            },
            attributes: ['id']
        });

        let screeningDb = await screening.findAll({
            where: {
                time: funcion,
            },
            attributes: ['id']
        });

        movieCreated.addGenres(genresDb)
        movieCreated.addCinemas(cinemaDb)
        movieCreated.addCinemaRooms(cinemaRoomsDb)
        movieCreated.addScreenings(screeningDb)
        // console.log(`
        // El genero que encuentra : ${genresDb.toJSON()} --- 
        // el cine que encuentra: ${cinemaDb} ---- 
        // La sala que encuentra:  ${cinemaRoomsDb} ----- 
        // La funcion que encuentra es: ${screeningDb}
        // `)
        // await movieCreated.addGenres(genresDb);
        res.status(200).send('listo');
    } catch (err) {
        next(err)
    }
};

module.exports = moviePost2