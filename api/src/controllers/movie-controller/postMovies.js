const { movies, genres, cinemas, cinemaRoom, screening } = require("../../db");

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
            cinema,
            sala,
            funcion
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

        let cinemaDb = await cinemas.findAll({
            where: {
                name: cinema,
            },
            attributes: ['id']
        });

        let cinemaRoomsDb = await cinemaRoom.findAll({
            where: {
                name: sala,
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
        res.status(200).send(movieCreated);
    } catch (err) {
        next(err)
    }
};

module.exports = moviePost2