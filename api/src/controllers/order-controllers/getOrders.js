const { purchase, cinemas, cinemaRoom, screening, seats, users, movies, purchaseOrder } = require('../../db')


const getOrders = async (req, res, next) => {
    try {

        const { surname } = req.query

        if(surname){
            const userQuery = await users.findAll({
                where: {
                    surname
                }
            })

            const orderQuery = await purchaseOrder.findAll({
                include:[
                    {
                        model: users,
                        where: {
                            surname
                        }
                    }]
            })

            orderQuery ?
            res.json(orderQuery) :
            res.json({message: 'The query threw no results'})
        }
        else {
            const ordersQuery = await purchaseOrder.findAll({
                include: {model: purchase}
            })
    
            ordersQuery ?
            res.json(ordersQuery) :
            res.json({ message: 'An error has occured'})
        }
        
    } catch (error) {
        next(error)
    }
}

module.exports = getOrders