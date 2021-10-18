const express = require('express')
const router = express.Router()
const {singIn,singUp} = require('../../controllers/login-controllers/login-controller')


router.post('/singUp',singUp)
router.post('/singIn',singIn)

module.exports = router