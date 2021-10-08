const { Purchase, User, Purchase_movie, Movies } = require("../../db");

module.exports = async (req, res, next) => {
  const {
    id,
    title,
    cart
  } = req.body;
console.log(req.body)
  try {
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error(`User with id: ${id} not found`);
    }

    const newOrder = {
      title,
    };

    const purchase = await Purchase.create(newOrder);
    
    await user.addPurchase(purchase.id);
    await purchase.setUser(user.id);

    cart.forEach(async (movie) => {
      const purchaseMovie = await Purchase_movie.create({
        units: movie.units,
        unitPrice: movie.price
      });
      await purchaseMovie.setPurchase(purchase.id);
      await purchaseMovie.setMovie(movie.id);
    });

    return res.status(201).send({purchaseId: purchase.id});
  } catch (err) {
    next(err);
    return res.status(409).send({ error: err.message });
  }
};