const { users } = require('../../db')

const getUserCart = async (req, res, next) => {
    try {
        const { user } = req.params;
        const userCartQuery = await users.findOne({
            where: {
                id: user
            },
            attributes: ["shoppingCart"],
        })
        userCartQuery ?
        res.json(userCartQuery) :
        res.json({ message: `The user doesn't exist`})
    } catch (error) {
        next(error)
    }
}

module.exports = getUserCart