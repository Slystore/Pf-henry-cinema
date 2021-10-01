const { Op } = require("sequelize");
const { genres } = require("../../db");

const getGenres = async (req, res, next) => {
  try {
    const { id } = req.params
    const { busqueda } = req.query

    if(id){

      // console.log(id)
      const genreId = await genres.findByPk(id)
      // console.log(genreId)
      genreId ? res.json(genreId) : res.status(404).send('No se encontro el genero solicitado')
    } else if(busqueda){

      console.log('entro aca')
      console.log(busqueda)
      const genreByName = await genres.findAll({
        where: {
          name: {
            [Op.iLike]: `%${busqueda}%`
          }
      }
    })
      console.log(genreByName)
      genreByName ? 
      res.json(genreByName) :
      res.status(404).send('La busqueda no ha arrojado resultados')
    }else {
      const genre = await genres.findAll();
      return res.json(genre)
    }
  } catch (error) {
    next(error)
  }
}

module.exports = getGenres



// const genresData = 
//  [
//     {
//       name: "Action"
//     },
//     {
//       name: "Adventure"
//     },
//     {
//       name: "Animation"
//     },
//     {
//       name: "Comedy"
//     },
//     {
//       name: "Crime"
//     },
//     {
//       name: "Documentary"
//     },
//     {
//       name: "Drama"
//     },
//     {
//       name: "Family"
//     },
//     {
//       name: "Fantasy"
//     },
//     {
//       name: "History"
//     },
//     {
//       name: "Horror"
//     },
//     {
//       name: "Music"
//     },
//     {
//       name: "Mystery"
//     },
//     {
//       name: "Romance"
//     },
//     {
//       name: "Science Fiction"
//     },
//     {
//       name: "TV Movie"
//     },
//     {
//       name: "Thriller"
//     },
//     {
//       name: "War"
//     },
//     {
//       name: "Western"
//     }
//   ]