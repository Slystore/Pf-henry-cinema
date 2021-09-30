const express = require('express')
const {moviePost, movieDelete, moviePut, getMovies} = require('../../controllers/movie-controller/movie')
const router = express.Router()

router.get('/', getMovies)
router.post('/createMovie',moviePost)
router.delete('/deleteMovie/:id',movieDelete)
router.put('/editMovie/:id', moviePut)

module.exports = router 