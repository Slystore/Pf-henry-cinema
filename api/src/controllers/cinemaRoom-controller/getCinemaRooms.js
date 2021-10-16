const { cinemaRoom } = require('../../db.js');
const { op } = require('sequelize');

const getCinemaRooms = async(req, res, next) => {
    try {
        const allCinemaRooms = await cinemaRoom.findAll()

        return res.status(200).json(allCinemaRooms);
    } catch (err) {
        next(err)
    }
}

module.exports = getCinemaRooms;