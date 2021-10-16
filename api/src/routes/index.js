const { Router } = require('express')

const movies = require('./movies/movies')
const genres = require('./genres/genres')
const login = require('./users/login')
const users = require('./users/users')
const cine = require('./cinemas/cinemas')
const compras = require('./purchase/purchase')
const orders = require('./purchaseOrder/orders')
const cinemaRooms = require('./cinemaRooms/cinemaRooms.js')

const router = Router()

router.use('/movies', movies)
router.use('/genres', genres)
router.use('/users', users)
router.use('/cinemas', cine)
router.use('/purchases', compras)
router.use('/purchaseOrder', orders)
router.use('/cinemaRooms', cinemaRooms)
router.use('/', login)

module.exports = router;