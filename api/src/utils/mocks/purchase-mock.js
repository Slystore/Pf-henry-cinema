const { users} = require('../../db');
const createPurchase = require("../../controllers/purchase-controller/postPurchase")
const purchaseMockUp = async () => {
  try {
    const mockUpReq = {
      body: {
        id: 0,
        title: "Free Guy",
        cart: [
        {
          units: 1,
          price: 99.99,
          movieid: 11
        },{
          units: 2,
          price: 47.99,
          movieid: 7
        },{
          units: 3,
          price: 39.99,
          movieid: 6
        }
      ]
      }
    };

    const mockUpRes = {
      status: () => ({
        send: () => {}
      })
    };

    const user = await users.count();

    let order = 1;
    let ordersPerUser = 4;

    while (mockUpReq.body.id <= user) {
      mockUpReq.body.id++;
      while (order < (ordersPerUser + 1)) {
        await createPurchase(mockUpReq, mockUpRes, () => {});
        order++
      }
      order = 1;
    }
    
  } catch (err) {
    console.log(err.message);
  }
}
module.exports = {
  purchaseMockUp
};