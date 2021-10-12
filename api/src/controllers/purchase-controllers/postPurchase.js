const { Op } = require('sequelize')
const sequelize = require('sequelize')
const { purchase, cinemas, cinemaRoom, screening, seats, users, movies, purchaseOrder } = require('../../db')

let aux = 1

const postPurchase = async (req, res, next) => {
    try {
        const { user } = req.params
        // Busco el carrito de compra del usuario: es un array de objetos
        let cart = await users.findOne({
            where: {
                id: user
            },
        })
        
        let shoppingCart = cart.dataValues.shoppingCart
       
        let cinemasQuery, cinemaRoomQuery, screeningQuery, seatsQuery, userQuery, movieQuery, purchaseCreation, purchaseQuery;
        let  purchaseArray = [];
       
         for (let i = 0; i < shoppingCart.length; i++, aux++) { // iteramos el array de objetos
                let { movieId, userId, cinemaId, cinemaRoomId, screeningId, seatId } = shoppingCart[i] //desestructuramos el objeto para sacar cada key y su value
             //Nos aseguramos que el asiento elegido este disponible en 'seats'
             console.log(movieId)
                seatsQuery = await seats.findOne({
                    where:{
                        [Op.and] : [
                            { id: seatId },
                            { isAvailable: true }
                        ]
                    }   
                })
                
                //si el asiento estaba disponible, se crea una compra
                if(seatsQuery) {
                    purchaseCreation = await purchase.create({
                        number: aux
                    })
                }
                //se identifica la compra recien realizada
                  purchaseQuery = await purchase.findOne({
                     where: { number: aux },
                     attributes: ['id']
                 })
                 
                 purchaseArray.push(purchaseQuery)
                 //se buscan los ids de los otros elementos recibidos por el objeto del carrito para hacer relaciones
                 cinemasQuery = await cinemas.findByPk(cinemaId)
                 cinemaRoomQuery = await cinemaRoom.findByPk(cinemaRoomId)
                 screeningQuery = await screening.findByPk(screeningId)
                 userQuery = await users.findByPk(userId)
                 movieQuery = await movies.findByPk(movieId)
                 console.log(movieQuery)
                 //se realizan las relaciones
                 if(seatsQuery){
                     await movieQuery.addPurchase(purchaseQuery)
                     await cinemasQuery.addPurchase(purchaseQuery)
                     await screeningQuery.addPurchase(purchaseQuery)
                     await cinemaRoomQuery.addPurchase(purchaseQuery)
                     await seatsQuery.setPurchase(purchaseQuery)
                     await seats.update({isAvailable: false},{ where: {id: seatId}}) // si el asiento estaba disponible, se switchea el flag
                     await userQuery.addPurchase(purchaseQuery)
                 }
         }

         let orderCreate
         if(purchaseArray) {//si se realizaron compras, se realiza una orden de compra
              orderCreate = await purchaseOrder.create({
              })
              //se relaciona la orden con las compras realizadas previamente
            await orderCreate.addPurchase(purchaseArray[0].id)
            await orderCreate.addPurchase(purchaseArray[1].id)
            await orderCreate.setUser(user)
            //se relaciona la orden con el usuario
            await users.update({shoppingCart: null},{
               where: {
                   id: user
               },
           })
            }

        purchaseArray ?
        res.json( 'The order has been created!') :
        res.status(404).json({message: `An error has occured! The order hasn't been created`})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = postPurchase

   