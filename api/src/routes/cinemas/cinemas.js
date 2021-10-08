const { Router} = require('express')
const getCinemas = require('../../controllers/cinema-controllers/getCinemas')
const getCinemasById = require('../../controllers/cinema-controllers/getCinemaById')
const postCinema = require('../../controllers/cinema-controllers/postCinema')
const updateCinema = require('../../controllers/cinema-controllers/putCinema')
const deleteCinema = require('../../controllers/cinema-controllers/deleteCinema')

const router = Router()

router.get('/', getCinemas)
// router.get('/:id', getCinemasById)
router.post('/create', postCinema)
router.put('/update/:id', updateCinema)
router.delete('/delete/:id', deleteCinema)

module.exports = router