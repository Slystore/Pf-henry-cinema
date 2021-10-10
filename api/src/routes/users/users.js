const { Router } = require("express");
const getUsers = require("../../controllers/users-controller/getUsers");
const putUsers = require("../../controllers/users-controller/putUser");
const deleteUsers = require("../../controllers/users-controller/deleteUser");
const { singUp, singIn } = require("../../controllers/login-controller/login-controller");
const getUserCart = require('../../controllers/users-controller/getUserCart')
const resetCart = require('../../controllers/users-controller/resetUserCart')
const fillCart = require('../../controllers/users-controller/fillCart')

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUsers);
router.get('/:user/cart', getUserCart)
router.post('/singIn', singIn);
router.post('/singUp', singUp);
router.post('/cart/:id', fillCart);
router.put('/update/:id', putUsers)
router.put('/update/cart/:user', resetCart)
router.delete('/delete/:id', deleteUsers);
    
module.exports = router;