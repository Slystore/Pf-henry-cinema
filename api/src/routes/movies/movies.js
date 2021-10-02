const express = require('express')

const {moviePost, movieDelete, moviePut} = require('../../controllers/movie-controller/movie')
const tokenVerify = require('../../middlewars/tokenAuth')
const router = express.Router()

router.post('/createMovie',tokenVerify,moviePost)
router.delete('/deleteMovie/:id',tokenVerify,movieDelete)
router.put('/editMovie/:id',tokenVerify, moviePut)

module.exports = router 