const express = require('express')
const googleLogin = require('../../controllers/login-controller/google-login')
const router = express.Router()
const {singIn,singUp} = require('../../controllers/login-controller/login-controller')



router.post('/singUp',singUp)
router.post('/singIn',singIn)
router.post('/googleLogin',googleLogin)

module.exports = router