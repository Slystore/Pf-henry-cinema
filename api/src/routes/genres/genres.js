const { Router } = require("express");
const {
  genrePost,
  genreDelete,
  genrePut,
} = require("../../controllers/genres-controller/genres");
const tokenVerify = require("../../middlewars/tokenAuth");



const router = Router();

router.get("/", (req, res) => res.json("hola3"));
router.post("/create",tokenVerify,genrePost);
router.put('/update/:id',tokenVerify,genrePut)
router.delete("/delete/:id",tokenVerify, genreDelete);
module.exports = router;
