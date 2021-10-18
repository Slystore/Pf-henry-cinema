const { Router } = require('express');
const getMovies = require('../../controllers/movie-controllers/getMovies');
const getById = require('../../controllers/movie-controllers/getMoviesById');
const postMovies = require('../../controllers/movie-controllers/postMovies');
const putMovies = require('../../controllers/movie-controllers/putMovies');
const deleteMovies = require('../../controllers/movie-controllers/deleteMovies');
const tokenVerify = require('../../middlewars/tokenAuth')

const router = Router()

// router.get('/', getMovies)
// router.get('/:id', getById)
// router.post('/createMovie', tokenVerify, postMovies)
// router.delete('/deleteMovie/:id', deleteMovies)
// router.put('/editMovie/:id', putMovies)

router.get('/', getMovies)
router.get('/:id', getById)
router.post('/createMovie', postMovies)
router.delete('/deleteMovie/:id', deleteMovies)
router.put('/editMovie/:id', putMovies)

module.exports = router