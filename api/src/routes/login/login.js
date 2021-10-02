const express = require('express')
const { singUp, singIn } = require('../../controllers/login-controller/login-controller')
const router = express.Router()

router.post('/singUp',singUp)
router.post('/singIn',singIn)


module.exports = router