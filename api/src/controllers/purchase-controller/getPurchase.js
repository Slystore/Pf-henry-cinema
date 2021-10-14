const { Purchase, Purchase_Movie, Movies, User } = require('../../db');

//GET--> Obtiene todas las ordenes existentes

module.exports = (req, res, next) => { 

    Purchase.findAll()
        .then(order => {
            res.send(order);
        })
        .catch(error => {
            console.log(error)
            res.sendStatus(400)
        })
};

//GET--> Obtiene una orden en particular con todos sus detalles: (x id de orden)
// -Todos los productos de esa orden con su nombre de producto
//- Los datos del usuario 