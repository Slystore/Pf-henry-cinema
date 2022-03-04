const { seats, shows } = require('../../db')

const getSeatsById = async (req, res, next) => {
    try {
        const { id } = req.params
        console.log(id)
        const queryById = await seats.findOne({
            where: { id  }
        })
        res.json(queryById)
    } catch (error) {
        console.log(error)
    }
}

module.exports = getSeatsById