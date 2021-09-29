const { movies, genres } = require("../../db");

const moviePost = async (req, res) => {
  try {
    let {
      name,
      rating,
      users_rating,
      availability,
      price,
      image,
      summary,
      runTime,
      genre,
    } = req.body;
    console.log("estos son los generos", genre);
    let movieCreated = await movies.create({
      name,
      rating,
      users_rating,
      availability,
      price,
      image,
      summary,
      runTime,
    });
    let genresDb = await genres.findAll({
      where: {
        name: genre,
      },
    });
    console.log("estos son los generos", genresDb);
    await movieCreated.addGenre(genresDb);
    res.status(200).send(movieCreated);
  } catch (err) {
    console.log(err);
  }
};

const movieDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const movieId = await movies.findByPk(id);
    console.log("esta es la id", movieId);
    if (movieId) {
      movieId.destroy();
      res.json("Movie delete succesfully");
    } else res.status(404).json("This movie doesn't exist");
  } catch (err) {
    console.log(err);
  }
};
const moviePut = async (req, res) => {
  const infoMovie = req.body;

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
    console.log(err);
  }
};

module.exports = {
  moviePost,
  movieDelete,
  moviePut,
};
