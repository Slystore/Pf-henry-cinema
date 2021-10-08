const { Purchase, Purchase_Movie, Movies, User } = require('../../db');

module.exports = async (req, res, next) => {
  const { purchaseId } = req.params;

  try {
    const order = await Purchase.findAll({
      where: {
        id: purchaseId,
      },
      include: [{
        model: Purchase_Movie,
        where: {
          purchaseId: purchaseId
        },
        include: [Movies]
      }]
    });

    if(!order[0]) {
      throw new Error(`Order with id: ${orderId} not found`)
    }

    return res.status(200).send(order[0]);
  } catch (err) {
    next(err);
    return res.status(409).send({ error: err.message });
  }
};