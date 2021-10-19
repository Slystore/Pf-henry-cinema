const { genres } = require("../../db");

const genrePut = async (req, res, next) => {
    try {
      const { id } = req.params;
      const name = req.body;
      const updateGenre = await genres.update(name, {
        where: {
          id,
        },
      });
      if (updateGenre[0] !== 0)
        res.json("El genero fue actualizado correctamente");
      else
        res
          .status(404)
          .send(
            "Ha ocurrido un error, la actualizacion solicitada no pudo completarse"
          );
    } catch (error) {
      next(error)
    }
  };

  module.exports = genrePut