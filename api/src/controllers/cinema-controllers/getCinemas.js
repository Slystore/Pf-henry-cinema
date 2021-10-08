const { cinemas, cinemaRoom, seats } = require('../../db')



 async function getCinemas (req, res, next) {
    try {
        const cinemasQuery = await cinemas.findAll({
            include: {
                model: cinemaRoom, 
                // where: handleGenresWhere(filters),
                // attributes: ["name"],
                // through: { 
                //     attributes: [] 
                // },
            }
        })

        cinemas ? 
        res.json(cinemasQuery) :
        res.status(404).json({message: 'Ha ocurrido un error'})
    } catch (error) {
        next(error)
    }
}

module.exports = getCinemas