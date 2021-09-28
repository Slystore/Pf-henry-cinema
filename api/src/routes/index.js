
const {Router} = require('express')

const router = Router() 

const movies = require('./movies/movies')

router.use('/movie',movies)

module.exports = router;