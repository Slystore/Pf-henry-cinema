const { Router } = require('express')
const getOrders = require('../../controllers/order-controllers/getOrders')
const getOrderById = require('../../controllers/order-controllers/getOrdersById')
const router = Router()

router.get('/', getOrders)
router.get('/:id', getOrderById)


module.exports = router