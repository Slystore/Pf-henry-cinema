const express = require('express')
const {moviePost, movieDelete} = require('../../controllers/movie-controller/movie')
const router = express.Router()

router.post('/createMovie',moviePost)
router.delete('/deleteMovie/:id',movieDelete)

module.exports = router