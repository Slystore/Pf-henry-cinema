const { purchase, cinemas, cinemaRoom, screening, seats, users } = require('../../db')

const getPurchaseById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const purchaseQuery = await purchase.findOne({
            where: {
                id
            },
            attributes: ["id", "nombre"],
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
        purchaseQuery ?
        res.json(purchaseQuery) :
        res.status(404).json({message: `The order doesn't exist`})
    } catch (error) {
        next(error)
    }
}

module.exports = getPurchaseById