const { Op } = require("sequelize");
const { users, purchase } = require("../../db");


const updateUser = async (req, res, next) => {
    try {
        const data = req.body;
        const { id } = req.params;

        const updateUser = await users.update(data, {
            where: {
                id
            }
        })
        
        updateUser[0] !== 0 ? 
        res.json('El usuario fue actualizado satisfactoriamente') :
        res.status(404).json('Hubo un error. La actualizacion no se puedo completar')
    } catch (error) {
        next(error)
    }
};
    
module.exports = updateUser