const { Router } = require("express");
const {
  genrePost,
  genreDelete,
  genrePut,
  getGenres
} = require("../../controllers/genres-controller/genres");


const router = Router();

router.get("/", getGenres);
router.post("/create", genrePost);
router.put('/update/:id',genrePut)
router.delete("/delete/:id", genreDelete);
module.exports = router;
