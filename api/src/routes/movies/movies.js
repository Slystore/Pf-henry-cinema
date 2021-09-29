const express = require('express')
const {moviePost} = require('../../controllers/movie-controller/movie')
const router = express.Router()

router.post('/createMovie',moviePost)

module.exports = router