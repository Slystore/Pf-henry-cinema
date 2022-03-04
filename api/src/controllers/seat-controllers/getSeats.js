const { Op } = require('sequelize');
const { seats, shows, movies, cinemas, cinemaRoom, screening } = require('../../db');

const getSeats = async (req, res, next) => {
    try {
        const {show, available} = req.query;
        if(show){
            if(available === false){
                const seatsByShow = await seats.findAll({
                    include: [
                        {
                            model: shows,
                            attributes: ['id'],
                            where: { id: show }
                        }
                    ]
                });
                res.json(seatsByShow)
            }else{
                const seatsByShow = await seats.findAll({
                    where: {
                        isAvailable: true 
                    },
                    include: [
                        {
                            model: shows,
                            attributes: ['id'],
                            where: { id: show }
                        }
                    ]
                });
    
                res.json(seatsByShow)
            }
        }else{
            const seatsQuery = await seats.findAll()
            res.json(seatsQuery) 
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = getSeats