const { movies, genres, cinemas, cinemaRoom, screening } = require("../../db");
const { Op } = require("sequelize");



const getMovies = async(req, res, next) => {
    const filters = req.query; // { title: 'free'} => es un objeto que contiene todo los query.params.
    try {
        const allMovies = await movies.findAll({

            include: [{
                    model: genres,
                    where: handleGenresWhere(filters),
                    attributes: {
                        includes: ["name"]
                    },
                    through: { attributes: [] },
                }, {
                    model: cinemas,
                    attributes: {
                        include: ["name", "location"],
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
            where: handleWhere(filters),
            //NO BORRAR EL SIGUIENTE COMENTARIO QUE ES PARA EL FILTRO POR TITLE Y GENRE
            // include: [{
            //     model: genres,
            //     // where: handleGenresWhere(filters),
            //     attributes: ["name"],
            //     through: { attributes: [] },
            // }],
            // where: handleWhere(filters),
        });
        return res.status(200).json(allMovies);
    } catch (err) {
        next(err)
    }
};

module.exports = getMovies