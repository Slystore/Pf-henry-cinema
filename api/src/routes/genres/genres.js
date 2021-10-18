const { Router } = require("express");
const getGenres = require("../../controllers/genres-controllers/getGenres");
const PostGenres = require("../../controllers/genres-controllers/postGenres");
const putGenres = require("../../controllers/genres-controllers/putGenres");
const deleteGenres = require("../../controllers/genres-controllers/deleteGenres");
const tokenVerify = require("../../middlewars/tokenAuth");


const router = Router();

router.get("/:id", getGenres);
router.get("/", getGenres);
router.post("/create", PostGenres);
router.put('/update/:id', putGenres)
router.delete("/delete/:id", deleteGenres);

module.exports = router;
