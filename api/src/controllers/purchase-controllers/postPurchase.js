const { Op } = require('sequelize')
const sequelize = require('sequelize')
const { purchase, cinemas, cinemaRoom, screening, seats, users, movies } = require('../../db')

let whatever = 1
const postPurchase = async (req, res, next) => {
    try {
      
        const [{ userId }] = req.body
        let cinemasQuery, cinemaRoomQuery, screeningQuery, seatsQuery, userQuery, movieQuery, purchaseCreation, purchaseQuery;
        let  purchaseArray = [];
        
        const user = await users.findByPk(userId)
       
         for (let i = 0; i < req.body.length; i++, whatever++) {
            
                let { movieId, userId, cinemaId, cinemaRoomId, screeningId, seatId } = req.body[i]
             
                seatsQuery = await seats.findOne({
                    where:{
                        [Op.and] : [
                            { id: seatId },
                            { isAvailable: true }
                        ]
                    }   
                })
                
                if(seatsQuery) {
                    purchaseCreation = await purchase.create({
                        number: whatever
                    })
                }
                
                  purchaseQuery = await purchase.findOne({
                     where: { number: whatever },
                     attributes: ['id']
                 })
                 
                 purchaseArray.push(purchaseQuery.dataValues.id)

                 cinemasQuery = await cinemas.findByPk(cinemaId)
                 cinemaRoomQuery = await cinemaRoom.findByPk(cinemaRoomId)
                 screeningQuery = await screening.findByPk(screeningId)
                 userQuery = await users.findByPk(userId)
                 movieQuery = await movies.findByPk(movieId)
                 
                 if(seatsQuery){
                     await movieQuery.addPurchase(purchaseQuery)
                     await cinemasQuery.addPurchase(purchaseQuery)
                     await screeningQuery.addPurchase(purchaseQuery)
                     await cinemaRoomQuery.addPurchase(purchaseQuery)
                     await seatsQuery.setPurchase(purchaseQuery)
                    //  console.log('flag',seatsQuery.isAvailable)
                     await seats.update({isAvailable: false},{ where: {id: seatId}}) 
                    //  console.log('flag en FALSE')
                     await userQuery.addPurchase(purchaseQuery)
                 }

                   purchasesQuery = await purchase.findOne({
                        where: { number: whatever },
                        attributes: ["id", "number"],
                            include: 
                            [
                                {
                                    model: cinemas,
                                    attributes: ["id"],
                                },
                                {
                                    model: cinemaRoom,
                                    attributes: ["id"],
                                },
                                {
                                    model: screening,
                                    attributes: ["id"],
                                },
                                {
                                    model: seats,
                                    attributes: ["id"],
                                },
                                {
                                    model: users,
                                    attributes: ["id"],
                                },
                                {
                                    model: movies,
                                    attributes: ["id"],
                                }
                            ]
                    })
                //  console.log('hecha la compra y las asociaciones...',purchaseQuery.toJSON())
                //  console.log('butaca...',seatsQuery.toJSON())
                 
             
         }

        // req.body.forEach( async el => {
        //     whatever++
        //     let { movieId, userId, cinemaId, cinemaRoomId, screeningId, seatId } = el
        //     console.log(movieId, userId, cinemaId, cinemaRoomId, screeningId, seatId)
        //     const purchaseCreation = await purchase.create({
        //         number: ++whatever
        //     })
            
        //     console.log(whatever)
        //     console.log(purchaseCreation)
        //      const purchaseQuery = await purchase.findOne({
        //          where: { number: whatever },
        //          attributes: ['id']
        //      })

        //      cinemasQuery = await cinemas.findByPk(cinemaId)
        //      cinemaRoomQuery = await cinemaRoom.findByPk(cinemaRoomId)
        //      screeningQuery = await screening.findByPk(screeningId)
        //      seatsQuery = await seats.findByPk(seatId)
        //      userQuery = await users.findByPk(userId)
        //      movieQuery = await movies.findByPk(movieId)
     
        //      await movieQuery.addPurchase(purchaseQuery)
        //      await cinemasQuery.addPurchase(purchaseQuery)
        //      await screeningQuery.addPurchase(purchaseQuery)
        //      await cinemaRoomQuery.addPurchase(purchaseQuery)
        //      await seatsQuery.setPurchase(purchaseQuery)
        //      await userQuery.addPurchase(purchaseQuery)

        //      console.log(purchaseQuery.toJSON())
        //      })
             
            //  await users.update({ shoppingCart: sequelize.literal(`${req.body}`)}, {where: {id: userId}})
            // await users.upsert()
            //  console.log(user.toJSON())
         
        

        // console.log(Array.isArray(userQuery.purchaseHistory))
        // userQuery.purchaseHistory = purchaseQuery
        // if(!userQuery.purchaseHistory) userQuery.purchaseHistory = [ purchasesQuery ]
        // else userQuery.purchaseHistory = userQuery.purchaseHistory.concat(purchasesQuery)
    //     let prueba1
    //     const prueba = purchaseArray.forEach(async e => {
    //         prueba1 = await purchase.findAll({
    //         where: {
    //             id: e
    //         }
    //     })
    //     console.log(prueba1)
    // })
    let prueba3 = await purchase.findAll({
        where: {
            id: purchaseArray
        }
    })
        //  console.log(prueba3)

        const userUpdate = await users.update( { shoppingCart: prueba3 },{
            where: {
                id: userId
            }
        })
        // await YourModel.update( { history: Sequelize.literal(`'${JSON.stringify({ hello: new Date(), random: Math.floor(Math.random() * Math.floor(2)) })}'::jsonb || history`) }, { where: { id: yourModelInstance.id } });


        purchaseArray ?
        res.json( 'The order has been created!') :
        res.status(404).json({message: `An error has occured! The order hasn't been created`})
        // console.log(userQuery)
        // res.json('hola')
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = postPurchase

   //  const purchasesQuery = await purchase.findOne({
            //      where: { number: whatever },
            //      attributes: ["id", "number"],
            //      include: 
            //      [
            //      {
            //          model: cinemas,
            //          attributes: ["id"],
            //      },
            //      {
            //          model: cinemaRoom,
            //          attributes: ["id"],
            //      },
            //      {
            //          model: screening,
            //          attributes: ["id"],
            //      },
            //      {
            //          model: seats,
            //          attributes: ["id"],
            //      },
            //      {
            //          model: users,
            //          attributes: ["id"],
            //      }
            //      ]