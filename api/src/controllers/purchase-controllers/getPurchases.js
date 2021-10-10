const { purchase, cinemas, cinemaRoom, screening, seats, users } = require('../../db')

const getPurchases = async (req, res, next) => {
    try {
        const purchasesQuery = await purchase.findAll({
            attributes: ["id", "number"],
            include: 
            [
            {
                model: cinemas,
                attributes: ["id"],
            },
            {
                model: cinemaRoom,
                attributes: ["id"],
            },
            {
                model: screening,
                attributes: ["id"],
            },
            {
                model: seats,
                attributes: ["id"],
            },
            {
                model: users,
                attributes: ["id"],
            }
            ]
        })
        res.json(purchasesQuery)
    } catch (error) {
        next(error)
    }
}

module.exports = getPurchases