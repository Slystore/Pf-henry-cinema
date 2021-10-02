const { Op } = require("sequelize");
const { users, purchase } = require("../../db");

const createUser = async (req, res, next) => {
    console.log('llegue')
    try {
        const {name, surname, mail, dni, password} = req.body;
        
        const [ createUser, created] = await users.findOrCreate({
            where: {
                name, surname, mail, dni, password
            }
        })

        created ? 
        res.json('El usuario se ha creado exitosamente') 
        :
        res.status(404).json('El usuario ya existe')

    } catch (error) {
        next(error)
    }
};
    
module.exports = createUser