const { Router} = require('express')
const getCinemas = require('../../controllers/cinema-controllers/getCinemas')
const getCinemasById = require('../../controllers/cinema-controllers/getCinemaById')
const postCinema = require('../../controllers/cinema-controllers/postCinema')
const updateCinema = require('../../controllers/cinema-controllers/putCinema')
const deleteCinema = require('../../controllers/cinema-controllers/deleteCinema')
const tokenVerify = require("../../middlewars/tokenAuth");

const router = Router()

router.get('/', getCinemas)
router.get('/:id', tokenVerify, getCinemasById)
router.post('/create', tokenVerify, postCinema)
router.put('/update/:id', tokenVerify, updateCinema)
router.delete('/delete/:id', tokenVerify, deleteCinema)

module.exports = router