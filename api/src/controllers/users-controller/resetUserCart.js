const { users } = require('../../db')

const resetUserCart = async (req, res, next) => {
    try {
        const { user } = req.params;
        const prueba = await users.findByPk(user)

         const updatedCart = await users.update({shoppingCart: null},{
            where: {
                id: user
            },
        })
        res.json(updatedCart)
    } catch (error) {
        next(error)
    }
}

module.exports = resetUserCart