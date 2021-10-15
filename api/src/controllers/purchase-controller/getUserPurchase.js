const { Purchase, Purchase_Movie, Movies, User } = require('../../db');

//GET--> Obtiene todas las ordenes de un usuario 

module.exports =  (req, res, next) => { 

    Purchase.findAll({
        where: {userId: req.params.id}
    })
        .then(order => {
            res.send(order);
        })
        .catch(error => {
            console.log(error)
            res.sendStatus(400)
        })
};