const { Purchase, Purchase_Movie, Movies, User } = require('../../db');

// module.exports = async (req, res, next) => {
//   const { purchaseId } = req.params;

//   try {
//     const purchase = await Purchase.findAll({
//       where: {
//         id: purchaseId,
//       },
//       include: [{
//         model: Purchase_Movie,
//         where: {
//           purchaseId: purchaseId
//         },
//         include: [Movies]
//       }]
//     });

//     if(!order[0]) {
//       throw new Error(`Order with id: ${orderId} not found`)
//     }

//     return res.status(200).send(order[0]);
//   } catch (err) {
//     next(err);
//     return res.status(409).send({ error: err.message });
//   }
// };
module.exports = (req, res, next) => { 

  Purchase.findByPk(
      req.params.id, 
      {include: [
          {model:User},
          {model: Purchase_Movie, include: [{model: Purchase, attributes: ["title"]}]}
      ]
      }
  )
      .then(order => {
          res.send(order);
      })
      .catch(error => {
          console.log(error)
          res.sendStatus(400)
      })
};