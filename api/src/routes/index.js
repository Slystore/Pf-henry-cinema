const { Router } = require('express')

const router = Router()
const login = require('./login/login')
const movies = require('./movies/movies')
const genres = require('./genres/genres')
const users = require('./users/users')

router.use('/movies', movies)
router.use('/genres', genres)
router.use('/users', users)
    // router.use('/',login)

module.exports = router;