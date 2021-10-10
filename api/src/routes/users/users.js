const { Router } = require("express");
const getUsers = require("../../controllers/users-controller/getUsers");
const putUsers = require("../../controllers/users-controller/putUser");
const deleteUsers = require("../../controllers/users-controller/deleteUser");
const { singUp, singIn } = require("../../controllers/login-controller/login-controller");


const router = Router();

router.get('/', getUsers);
router.get('/:id', getUsers);
router.post('/singIn', singIn);
router.post('/singUp', singUp);
router.put('/update/:id', putUsers)
router.delete('/delete/:id', deleteUsers);
    
module.exports = router;