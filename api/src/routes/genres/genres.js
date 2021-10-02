const { Router } = require("express");
const getGenres = require("../../controllers/genres-controller/getGenres");
const PostGenres = require("../../controllers/genres-controller/postGenres");
const putGenres = require("../../controllers/genres-controller/putGenres");
const deleteGenres = require("../../controllers/genres-controller/deleteGenres");
const tokenVerify = require("../../middlewars/tokenAuth");


const router = Router();

router.get("/:id", getGenres);
router.get("/", getGenres);
router.post("/create", tokenVerify, PostGenres);
router.put('/update/:id', tokenVerify, putGenres)
router.delete("/delete/:id", tokenVerify, deleteGenres);

module.exports = router;
