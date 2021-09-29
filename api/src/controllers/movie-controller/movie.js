
const {movies,Genres} = require('../../db')

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
    let movieCreated = await movies.create({
      name: name,
      rating: rating,
      users_rating: users_rating,
      availability: availability,
      price: price,
      image: image,
      summary: summary,
      runTime: runTime,
      genre: genre,
    });
    let genres = await Genres.findAll({
      where: {
        name: genre,
      },
    });
    await movieCreated.addGenre(genres);
    res.status(200).send(movieCreated)

  } catch (err) {
    console.log(err);
  }
};
module.exports ={
    moviePost
}
