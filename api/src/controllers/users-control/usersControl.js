const { Op } = require("sequelize");
const { users, purchase } = require("../../db");
const mockUps = require('../../utils/mocks/users-mock.json')

const getUsers = async (req, res) => {
    try {
        let {name} = req.query;

        if(name){ // Si recibo name por query, implica una busqueda de users por nombre
            name = name.toLowerCase().trim()
            const dbQuery = await users.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                },
            })
            // include: {
            //     model: purchase,
            //     attributes: ['moviesPurchased'],
            //     through: {
            //       attributes: []
            //     }
            // }
            dbQuery ? res.json(dbQuery) : res.status(404).send('No se obtuvieron resultados')
        } else {
            //rellenado de DB
            const queryDB = await users.findAll()
            // Si la BD ya contiene data, solo busca y devuelve lo que tiene ya adentro la BD
            if(queryDB.length > 0) res.json(queryDB)
            // sino, rellena la BD con los mocks
            else { 
                const fillDB = await users.bulkCreate(mockUps)
                const query = await users.findAll()
                // {
                //     include: {
                //         model: purchase,
                //         attributes: ['moviesPurchased'],
                //         through: {
                //           attributes: []
                //         }
                //     }
                // }
                res.json(query)
        }
        } 
    } catch (error) {
        console.log(error)
    }
};

const createUser = async (req, res) => {
    console.log('llegue')
    try {
        const {name, surname, mail, dni, password} = req.body;
        
        const [ createUser, created] = await users.findOrCreate({
            where: {
                name, surname, mail, dni, password
            }
        })
        
        // console.log(createUser)
        created ? 
        res.json('El usuario se ha creado exitosamente') 
        :
        res.status(404).json('El usuario ya existe')

    } catch (error) {
        console.log(error)
    }
};

const updateUser = async (req, res) => {
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
        console.log(error)
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await users.findByPk(id)

        if(user) {
            await user.destroy();
            res.json('El usuario ha sido eliminado') 
        } else res.status(404).send('Ha ocurrido un error')
    } catch (error) {
        console.log(error)
    }
}
    
module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
  };
  