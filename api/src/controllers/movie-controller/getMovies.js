const { movies, genres, cinemas, cinemaRoom, screening } = require("../../db");
const { Op } = require("sequelize");


// const handleWhere = (queryParams) => {
//     let data = {};
//     if (queryParams.hasOwnProperty('title')) {
//         data.title = {
//             [Op.substring]: queryParams.title,
//         }
//     }
//     return data;
// };

// const handleGenresWhere = (queryParams) => {
//     let data = {};
//     if (queryParams.hasOwnProperty('genre')) {
//         data.name = {
//             [Op.eq]: queryParams.genre
//         }
//     }
//     return data;
// }

const getMovies = async(req, res, next) => {
    const filters = req.query; // { title: 'free'} => es un objeto que contiene todo los query.params.

    try {
        const allMovies = await movies.findAll({
            include:  [{model:genres},{model:cinemas}]
            
            // where: handleWhere(filters),
        });
        return res.status(200).json(allMovies);
    } catch (err) {
        next(err)
    }
};

module.exports = getMovies