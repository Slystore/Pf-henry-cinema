const { Router } = require("express");
const {
  genrePost,
  genreDelete,
  genrePut,
} = require("../../controllers/genres-controller/genres");


const router = Router();

router.get("/", (req, res) => res.json("hola3"));
router.post("/create", genrePost);
router.put('/update/:id',genrePut)
router.delete("/delete/:id", genreDelete);
module.exports = router;
