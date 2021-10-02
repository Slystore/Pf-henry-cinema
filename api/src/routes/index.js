const expresss = require('express')
const {Router} = require('express')

const router = Router() 
const login = require('./login/login')
const movies = require('./movies/movies')
const genres = require('./genres/genres')

router.use('/',login)
router.use('/movie', movies)
router.use('/genre', genres)

module.exports = router;