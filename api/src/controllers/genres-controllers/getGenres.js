const { Op } = require("sequelize");
const { genres } = require("../../db");

const getGenres = async(req, res, next) => {
    try {
        const { id } = req.params;
        const { busqueda } = req.query;

        if (id) {
            const genreId = await genres.findByPk(id);
            genreId
                ?
                res.json(genreId) :
                res.status(404).send("No se encontro el genero solicitado");
        } else if (busqueda) {
            const genreByName = await genres.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${busqueda}%`,
                    },
                },
            });
            genreByName
                ?
                res.json(genreByName) :
                res.status(404).send("La busqueda no ha arrojado resultados");
        } else {
            const genre = await genres.findAll();
            return res.json(genre);
        }
    } catch (error) {
        next(error);
    }
};
module.exports = getGenres;