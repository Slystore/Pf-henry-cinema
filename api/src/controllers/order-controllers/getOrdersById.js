const { purchase, cinemas, cinemaRoom, screening, seats, users, movies, purchaseOrder } = require('../../db')


const getOrderById = async (req, res, next) => {
    try {
        const { id } = req.params

        const ordersQuery = await purchaseOrder.findOne({
            where: { id },
            include: {model: purchase}
        })

        ordersQuery ?
        res.json(ordersQuery) :
        res.json({ message: `The order doesn't exist!`})
        
        
    } catch (error) {
        next(error)
    }
}

module.exports = getOrderById