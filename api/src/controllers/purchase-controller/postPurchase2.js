const { Purchase, User, Purchase_movie, Movies } = require("../../db");

server.post('/', (req, res, next) => {
    (console.log(req.body))
    if(!req.body.userId){ 
        res.status(400)
        .send('Cuidado! Faltan datos para poder crear una orden')
    }
    else{
    Order.findOne({         // Buscar un carrito activo Status:"created"
        where: {
          userId: req.body.userId,
          status:"created"
        }
    }).then(res=>
        !res ?  Order.findOne({  // Si no lo encuentra, buscará un Status:"cart"
            where: {
              userId: req.body.userId,
              status:"cart"
            }
        }) : res
    )
        .then((order) =>{                   // Si no encontró carrito activo, creará uno en estado "cart"
            if(!order){
                Order.create({
                      userId: req.body.userId,
                      status:"cart"
                    }).then(created=>res.status(200).send(created))
            }
           else
            return res.status(201).send(order)
        }
        ).catch(next);
    }

    });