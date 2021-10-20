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
            cinemaId,
            cinemaRoomId,
            screeningTime
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
            genre,
            cinemaId,
            cinemaRoomId,
            screeningTime
        });

        const genresDb = await genres.findAll({
            where: {
                name: genre,
            },
            attributes: ['id']
        });

        const cinemaDb = await cinemas.findAll({
            where: {
                name: cinemaId,
            },
            attributes: ['id']
        });

        const cinemaRoomsDb = await cinemaRoom.findAll({
            where: {
                id: cinemaRoomId,
            },
            attributes: ['id']
        });

        const screeningDb = await screening.findOne({
            where: {
                time: screeningTime,
            },
            through: {
                attributes: ['id'],
            },
        });

        await movieCreated.addGenres(genresDb)
        await movieCreated.addCinemas(cinemaDb)
        await movieCreated.addCinemaRooms(cinemaRoomsDb)
        await movieCreated.addScreenings(screeningDb)

        res.status(200).json(movieCreated);
    } catch (err) {
        next(err)
    }
};

module.exports = moviePost2