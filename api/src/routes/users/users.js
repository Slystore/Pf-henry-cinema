const { Router } = require("express");
const {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} = require("../../controllers/users-control/usersControl");


const router = Router();

router.get('/', getUsers);
router.post('/create', createUser);
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser);

module.exports = router;