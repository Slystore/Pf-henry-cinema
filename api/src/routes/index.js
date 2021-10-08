
const {Router} = require('express')

const router = Router() 
const login = require('./login/login')
const movies = require('./movies/movies')
const genres = require('./genres/genres')
const users = require('./users/users')
const purchase = require('./purchase/purchase')

router.use('/movies', movies)
router.use('/genres', genres)
router.use('/users', users)
// router.use('/',login)
router.use('/purchase', purchase)

module.exports = router;