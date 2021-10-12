const { cinemas, cinemaRoom } = require('../../db')

async function getCinemas(req, res, next) {
    try {
        const cinemasQuery = await cinemas.findAll({});
        cinemas ?
            res.json(cinemasQuery) :
            res.status(404).json({ message: 'Ha ocurrido un error' })
    } catch (err) {
        next(err)
    }
}

module.exports =  getCinemas 