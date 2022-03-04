const { movies, genres } = require('../../db');


const getMoviesok = async(req, res) => {
    try {
        const allMovies = await movies.findAll({
            include: {
                model: genres,
                attributes: {
                    include: ['name'],
                }
            }
        });
        return res.status(200).send(allMovies);
    } catch (err) {
        console.log({
            error: "Can't Fetch Genres",
            originalError: err,
        })
    }
}

module.exports = { getMoviesok };