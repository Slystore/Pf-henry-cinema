const {
    movies,
    genres,
    cinemas,
    cinemaRoom,
    screening,
} = require("../../db.js");

const getMoviesById = async(req, res, next) => {
    try {
        const id = req.params.id;
        const moviesById = await movies.findOne({
            where: {
                id,
            },
            include: [{
                    model: genres,
                    attributes: {
                        include: ["name"],
                    },
                    through: {
                        attributes: [],
                    },
                },
                {
                    model: cinemas,
                    attributes: {
                        include: ["name"],
                    },
                    through: {
                        attributes: [],
                    },
                },
                {
                    model: cinemaRoom,
                    attributes: {
                        include: ["name", "seatCount"],
                    },
                    through: {
                        attributes: [],
                    },
                },
                {
                    model: screening,
                    attributes: {
                        include: ['time'],
                    },
                },
            ],
        });
        res.status(200).json(moviesById);
    } catch (error) {
        next(error);
    }
};

module.exports = getMoviesById;