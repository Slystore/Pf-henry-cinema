const { Router } = require("express");
const getUsers = require("../../controllers/users-controller/getUsers");
const putUsers = require("../../controllers/users-controller/putUser");
const deleteUsers = require("../../controllers/users-controller/deleteUser");
const {singUp,singIn} = require('../../controllers/login-controller/login-controller');
const tokenVerify = require("../../middlewars/tokenAuth");

const router = Router();

router.get('/', tokenVerify,getUsers);
router.get('/:id', tokenVerify,getUsers);

router.post('/singIn',singIn);
router.post('/singUp',singUp)

router.put('/update/:id', putUsers)
router.delete('/delete/:id', deleteUsers);

module.exports = router;