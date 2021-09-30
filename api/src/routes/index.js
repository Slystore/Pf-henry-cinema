const expresss = require('express')
const {Router} = require('express')

const router = Router() 

const movies = require('./movies/movies')
const genres = require('./genres/genres')

router.use('/movies', movies)
router.use('/genres', genres)

module.exports = router;