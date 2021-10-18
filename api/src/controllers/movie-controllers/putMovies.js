const { movies, genres } = require("../../db");

const moviePut = async (req, res, next) => {
  const infoMovie = req.body;
  const { genre } = req.body;

  try {
    const { id } = req.params;
    
    const updateMovie = await movies.update(infoMovie, {
      where: {
        id:id,
      },
    });
    if(updateMovie.length !== 0) return res.status(200).send(updateMovie)
    else res.status(404).json('Movie Not found')
  } catch (err) {
    next(error)
  }
};

module.exports = moviePut