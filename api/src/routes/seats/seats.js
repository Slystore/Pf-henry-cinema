const {Router} = require('express')
const getSeatById = require('../../controllers/seat-controllers/getSeatById')
const getSeats = require('../../controllers/seat-controllers/getSeats')

const router = Router()

router.get('/', getSeats)
router.get('/:id', getSeatById)

module.exports = router