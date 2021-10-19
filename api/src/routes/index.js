const { Router } = require('express');

const movies = require('./movies/movies')
const genres = require('./genres/genres')
const login = require('./users/login')
const users = require('./users/users')
const cine = require('./cinemas/cinemas')
const compras = require('./purchase/purchase')
const orders = require('./purchaseOrder/orders')
const shows = require('./shows/shows')
const seats = require('./seats/seats')
const mercadoPago= require('./mercadoPago/mercadoPago')

const router = Router();

router.use('/movies', movies)
router.use('/genres', genres)
router.use('/users', users)
router.use('/cinemas', cine)
router.use('/purchases', compras)
router.use('/purchaseOrder', orders)
router.use('/shows', shows)
router.use('/seats', seats)
router.use('/mercadoPagos',mercadoPago )
    // router.use('/', login)

module.exports = router;