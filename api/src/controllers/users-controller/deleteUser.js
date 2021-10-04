const { Op } = require("sequelize");
const { users, purchase } = require("../../db");


const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        const user = await users.findByPk(id)

        if(user) {
            await user.destroy();
            res.json('El usuario ha sido eliminado') 
        } else res.status(404).send('Ha ocurrido un error')
    } catch (error) {
        next(error)
    }
}
    
module.exports = deleteUser