const { Op } = require("sequelize");
const { users, purchase } = require("../../db");


const getUsers = async(req, res, next) => {
    try {
        let { name } = req.query;
        const { id } = req.params

        if (name) { // Si recibo name por query, implica una busqueda de users por nombre
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
        } else if (id) {
            const userId = await users.findByPk(id)
            userId ? res.json(userId) : res.status(404).send('usuario no encontrado')
        } else {
            //rellenado de DB
            const queryDB = await users.findAll()
                // Si la BD ya contiene data, solo busca y devuelve lo que tiene ya adentro la BD
            if (queryDB.length > 0) res.json(queryDB)
                // sino, rellena la BD con los mocks
            else {
                const usersList = await users.findAll();
                const query = await users.findAll();
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
        next(error)
    }
};

module.exports = getUsers