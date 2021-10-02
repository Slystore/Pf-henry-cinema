const { movies, genres } = require("../../db");

const moviePost = async(req, res, next) => {
    try {
        let {
            title,
            rating,
            usersRating,
            availability,
            price,
            image,
            description,
            runTime,
            genre,
        } = req.body;

        let movieCreated = await movies.create({
            title,
            rating,
            usersRating,
            availability,
            price,
            image,
            description,
            runTime,
        });
        let genresDb = await genres.findAll({
            where: {
                name: genre,
            },
            attributes: ['id']

        });
        await movieCreated.addGenres(genresDb);
        res.status(200).send(movieCreated);
    } catch (err) {
        next(err)
    }
};

module.exports = moviePost