const {Router} = require('express')
const getShows = require('../../controllers/shows-controller/getShows')
const getShowsById = require('../../controllers/shows-controller/getShowsById')
const createShow = require('../../controllers/shows-controller/postShow')

const router = Router()

router.get('/', getShows)
router.get('/:id', getShowsById)
router.get('/create', createShow)

module.exports = router