const { cinemaRoom } = require("../../db.js");
const { op } = require("sequelize");

const getCinemaRooms = async(req, res, next) => {
    try {
        const { id } = req.params;

        if (id) {
            const cinemaRoomById = await cinemaRoom.findByPk(id);
            cinemaRoomById
                ?
                res.status(200).json(cinemaRoomById) :
                res.status(404).send("No se encontro el Cinema Solicitado ");
        } else {
            const allCinemaRooms = await cinemaRoom.findAll();
            return res.status(200).json(allCinemaRooms);
        }
    } catch (err) {
        next(err);
    }
};

module.exports = getCinemaRooms;