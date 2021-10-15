const { cinemas, cinemaRoom } = require('../../db')


const updateCinema = async (req, res, next) => {
    try {
        const { id } = req.params;
        const cinemaData = req.body
        const { salas } = req.body

        console.log(id)

        const CinemaQuery = await cinemas.findByPk(id)

        const cinemaUpdate = await cinemas.update(cinemaData, {
            where: { id }
        })

        if(salas) {
            // salas.forEach( async (el) => {
            //     let { name, seatCount } = el
            //     await CinemaQuery.setCinemaRooms({name, seatCount})

            // }
            // );
            await CinemaQuery.removeCinemaRooms()
            await CinemaQuery.setCinemaRooms(salas)
            
        }
        cinemaUpdate[0] !== 0 ?
        res.json('The cinema has been updated correctly!') :
        res.status(404).json({message: 'An error has occured'})
    } catch (error) {
        next(error)
    }
}

module.exports = updateCinema