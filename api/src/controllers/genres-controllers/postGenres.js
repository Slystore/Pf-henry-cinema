const { genres } = require("../../db");

const genrePost = async (req, res, next) => {
    try {
      const { name } = req.body;
      const [genreQuery, created] = await genres.findOrCreate({
        where: {
          name,
        },
      });
      created ? 
      res.json('El genero se ha creado correctamente ') :
      res.status(404).send("El genero ya existia en la base de datos");
    } catch (error) {
      next(error)
    }
  };

  module.exports = genrePost