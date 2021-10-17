const { screening } = require("../../db.js");
// const { op } = require("sequelize");

const getScreenings = async(req, res, next) => {
    try {
        const { id } = req.params;

        if (id) {
            const screeningById = await screening.findByPk(id);
            screeningById
                ?
                res.status(200).json(screeningById) :
                res.status(404).send("No se encontro el Cinema Solicitado ");
        } else {
            const allScreenings = await screening.findAll();
            return res.status(200).json(allScreenings);
        }
    } catch (err) {
        next(err);
    }
};

module.exports = getScreenings;