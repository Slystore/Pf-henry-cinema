const { users } = require('../../db')

const fillUserCart = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const user = await users.findByPk(id)

        const userUpdate = await users.update( { shoppingCart: req.body },{
            where: { id }
        })

        const userCart = await users.findByPk(id)
       
        userCart.shoppingCart ?
        res.json( 'The cart has been filled!') :
        res.status(404).json({message: `An error has occured! The shopping Cart is empty`})
        // console.log(userQuery)
        // res.json('hola')
    } catch (error) {
        next(error)
    }
}

module.exports = fillUserCart