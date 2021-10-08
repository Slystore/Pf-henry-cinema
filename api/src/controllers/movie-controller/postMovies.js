const { movies, genres } = require("../../db");

const moviePost = async(req, res, next) => {
    try {
        let {
            title,
            rating,
            description,
            actores,
            director,
            usersRating,
            votes,
            availability,
            price,
            image,
            runTime,
            genre,
            // cinema,
            // salas,
            // funcion
        } = req.body;

        let movieCreated = await movies.create({
            title,
            rating,
            description,
            actores,
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

        // let cinemaDb = await cinemas.findAll({
        //     where: {
        //         name: cinema,
        //     },
        //     attributes: ['id']
        // });

        // let cinemaRoomsDb = await cinemaRoom.findAll({
        //     where: {
        //         name: salas,
        //     },
        //     attributes: ['id']
        // });

        // let screeningDb = await screening.findAll({
        //     where: {
        //         time: funcion,
        //     },
        //     attributes: ['id']
        // });
        movieCreated.addGenres(genresDb);
        // movieCreated.addCinemas(cinemaDb);
        // movieCreated.addCinemaRooms(cinemaRoomsDb);
        // movieCreated.addScreenings(screeningDb);
        console.log(movieCreated);
        res.status(200).send('Movie Created Successfully');
    } catch (err) {
        next(err)
    }
};
module.exports = moviePost