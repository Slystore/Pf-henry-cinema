const { Router } = require("express");
const getOrderById = require("../../controllers/purchase-controller/getPurchaseId");
const postPurchase = require("../../controllers/purchase-controller/postPurchase");

const router = Router();

router.get('/:orderId', getOrderById);
router.post('/addOrder', postPurchase);

module.exports = router 