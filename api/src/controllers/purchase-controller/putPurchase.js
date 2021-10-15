const { Purchase, Purchase_Movie, Movies, User } = require('../../db');
// PUT --> Modificar (el estado de) una orden existente

module.exports =  (req, res, next) => {

    if(!req.body.status){ //si no tiene estado
        res.status(400)
        .send('No estas modificando ningun campo')
    }
    else
    Purchase.findByPk(req.params.id).then((order)=>{
        order.status= req.body.status; 
        return order.save();
    })
    .then((order)=> res.status(200).send(order))
    .catch(error => {
        console.log(error)
        res.sendStatus(400)
    })
};