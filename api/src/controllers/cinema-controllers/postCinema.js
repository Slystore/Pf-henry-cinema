const { cinemas, cinemaRoom } = require('../../db')


const postCinema = async(req, res, next) => {
    try {
        let { name, location, salas } = req.body
        const [createCinema, created] = await cinemas.findOrCreate({
            where: { name, location }
        })

        if (created) {

            salas.forEach(async(el) => {
                    // console.log('esto entra en el foreach', el)
                    let { name, seatCount } = el
                    const roomCreate = await cinemaRoom.create({ name, seatCount })
                    await createCinema.addCinemaRoom(roomCreate)
                })
                // const cinemaRoomsCreation = await cinemaRoom.bulkCreate(salas);
                // cinemaRoomsCreation.length ?
            res.json('The cinema and its rooms were created successfully')
                // res.status(404).json({message: 'Something went wrong!'})
        } else {
            const query = await cinemas.findOne({
                where: {
                    name
                }
            })
            salas.forEach(async(el) => {
                let { name, seatCount } = el
                const [create, notCreate] = await cinemaRoom.findOrCreate({
                    where: { name, seatCount }
                })
                if (create) await query.addCinemaRoom(create)
            })
            res.json('The cinema and its rooms were created successfully')
        }
        //    cinemas.bulkCreate()
    } catch (error) {
        next(error)
    }
}

module.exports = postCinema