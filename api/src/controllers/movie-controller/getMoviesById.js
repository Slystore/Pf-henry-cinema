const { movies, genres } = require('../../db.js');

const getMoviesById = async(req, res, next) => {
    try {
        const id = req.params.id;
        const moviesById = await movies.findOne({
            where: { 
                id 
            },
            include: {
                model: genres,
                attributes: {
                    include: ['name']
                },
                through: {
                    attributes: []
                }
            }
    });
    res.status(200).json(moviesById);
    } catch (error) {
        next(error)
    }
    
};

module.exports = getMoviesById