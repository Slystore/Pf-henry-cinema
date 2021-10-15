const { Router } = require('express');
const getPurchases = require('../../controllers/purchase-controllers/getPurchases')
const getPurchaseById = require('../../controllers/purchase-controllers/getPurchaseById')
const postPurchase = require('../../controllers/purchase-controllers/postPurchase')
    // const updatePurchase = require('../../controllers/purchase-controllers/putPurchase')
    // const delPurchase = require('../../controllers/purchase-controllers/deletePurchase')

const router = Router()

router.get('/', getPurchases)
router.get('/:id', getPurchaseById)
router.post('/:user/create', postPurchase)

// router.put('/update/:id', updatePurchase)
// router.delete('/delete/:id', delPurchase)

module.exports = router