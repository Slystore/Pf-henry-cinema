const { Router } = require("express");
const getUsers = require("../../controllers/users-controller/getUsers");
const postUsers = require("../../controllers/users-controller/postUser");
const putUsers = require("../../controllers/users-controller/putUser");
const deleteUsers = require("../../controllers/users-controller/deleteUser");


const router = Router();

router.get('/', getUsers);
router.get('/:id', getUsers);
router.post('/create', postUsers);
router.put('/update/:id', putUsers)
router.delete('/delete/:id', deleteUsers);

module.exports = router;