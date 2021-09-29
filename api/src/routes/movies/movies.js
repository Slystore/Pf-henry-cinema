const express = require('express')
const {moviePost, movieDelete, moviePut} = require('../../controllers/movie-controller/movie')
const router = express.Router()

router.post('/createMovie',moviePost)
router.delete('/deleteMovie/:id',movieDelete)
router.put('/editMovie/:id', moviePut)

module.exports = router 