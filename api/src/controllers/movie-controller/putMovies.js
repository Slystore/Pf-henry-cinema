const { movies, genres, cinemaRoom,cinemas,screening } = require("../../db");

const moviePut = async (req, res, next) => {
  const infoMovie = req.body;

  try {
    const { id } = req.params;
    const movieSinUpdate = await movies.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: genres,
          attributes: {
              includes: ["name"]
          },
          through: {
              attributes: []
          },
      }, {
          model: cinemas,
          attributes: {
              include: ["id","name", "location"],
          },
          through: {
              attributes: [],
          },
      },
      {
          model: cinemaRoom,
          attributes: {
              include: ["name", "seatCount"],
          },
          through: {
              attributes: [],
          },
      },
      {
          model: screening,
          attributes: {
              include: ['time'],
          },
      },
      ],
    });
    console.log(
      "esta es mi pelicual que encontre en el findOne",
      movieSinUpdate
    );
    console.log("este es mi body de put", infoMovie);

    const updateMovie = await movies.update(infoMovie, {
      where: {
        id: id,
      },
    });
    await movieSinUpdate.setGenres(req.body.genre);
    await movieSinUpdate.setCinemas(req.body.cinema)
    await movieSinUpdate.setCinemaRooms(req.body.sala)
    await movieSinUpdate.setScreenings(req.body.funcion)
    if (updateMovie.length !== 0) return res.status(200).send(updateMovie);
    else res.status(404).json("Movie Not found");
  } catch (err) {
    next(err);
  }
};

module.exports = moviePut;
