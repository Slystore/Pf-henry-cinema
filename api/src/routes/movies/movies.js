const express = require('express')

const router = express.Router()

router.get('/', (req,res) =>{
    console.log('estoy entrando ')
    res.json('hola')
})

module.exports = router