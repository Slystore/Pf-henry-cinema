const { Router } = require('express')

const movies = require('./movies/movies')
const genres = require('./genres/genres')
const login = require('./users/login')
const users = require('./users/users')
const cine = require('./cinemas/cinemas')
const compras = require('./purchase/purchase')

const router = Router()

router.use('/movies', movies)
router.use('/genres', genres)
router.use('/users', users)
router.use('/cinemas', cine)
router.use('/purchases', compras)
router.use('/', login)

module.exports = router;