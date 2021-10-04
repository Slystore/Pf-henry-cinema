const { genres } = require("../../db");

const genreDelete = async(req, res, next) => {
    try {
        const { id } = req.params;
        const genreById = await genres.findByPk(id);
        if (genreById) {
            genreById.destroy();
            res.json("Genero eliminado con exito");
        } else res.status(404).send("No existe ese genero");
    } catch (error) {
        next(error)
    }
};

module.exports = genreDelete