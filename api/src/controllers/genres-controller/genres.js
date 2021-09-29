const {genres} = require('../../db')
const genrePost = async (req,res) => {
  try {
    const { name } = req.body;
    const [genreQuery, created] = await genres.findOrCreate({
      where: {
        name,
      },
    });
    if (created) res.json(genreQuery);
    else res.status(404).send("La receta ya existia en la base de datos");
  } catch (error) {
    console.log(error);
  }

};

const genreDelete = async (req) => {
  try {
    const { id } = req.params;
    const genreById = await genres.findByPk(id);
    console.log(genreById);
    if (genreById) {
      genreById.destroy();
      res.json("Genero eliminado con exito");
    } else res.status(404).send("No existe ese genero");
  } catch (error) {
    console.log(error);
  }

};

module.exports = {
  genrePost,
  genreDelete,
};
