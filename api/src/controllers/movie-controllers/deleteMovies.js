const { movies } = require("../../db");



const movieDelete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movieId = await movies.findByPk(id);
    
    if (movieId) {
      movieId.destroy();
      res.json("Movie delete succesfully");
    } else res.status(404).json("This movie doesn't exist");
  } catch (err) {
    next(err)
  }
};


module.exports = movieDelete