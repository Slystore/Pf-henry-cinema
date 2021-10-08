require('dotenv').config();
const { Sequelize } = require('sequelize');
const genresModel = require('./models/Genres')
const cinemasModel = require('./models/Cinemas')
const moviesModel = require('./models/Movies')
const usersModel = require('./models/User.js')
const purchaseModel = require('./models/Purchase')
const screeningModel = require('./models/Screening')
const roomModel = require('./models/CinemaRoom')
const seatsModel = require('./models/Seats');
const purchase_movieModel = require('./models/Purchase_Movie');

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env;

// console.log( DB_USER,
//     DB_PASSWORD,
//     DB_HOST,
//     DB_NAME)

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

genresModel(sequelize)
cinemasModel(sequelize)
moviesModel(sequelize)
usersModel(sequelize)
purchaseModel(sequelize)
screeningModel(sequelize)
roomModel(sequelize)
seatsModel(sequelize)
purchase_movieModel(sequelize)

const { genres, cinemas, movies, users, purchase, screening, cinemaRoom, seats, purchase_movie } = sequelize.models;
console.log(sequelize.models)

genres.belongsToMany(movies, { through: 'moviesGenre' })
movies.belongsToMany(genres, { through: 'moviesGenre' })

movies.belongsToMany(cinemas, { through: 'moviesCinema' })
cinemas.belongsToMany(movies, { through: 'moviesCinema' })

cinemas.hasMany(cinemaRoom)
cinemaRoom.belongsTo(cinemas)

screening.belongsTo(movies)
movies.hasMany(screening)

screening.belongsTo(movies)
movies.hasMany(screening)

screening.belongsTo(cinemaRoom)
cinemaRoom.hasMany(screening)

seats.belongsTo(cinemaRoom)
cinemaRoom.hasMany(seats)

movies.hasMany(purchase_movie)
purchase_movie.belongsTo(movies, {
    foreignKey: "moviesId",
})
purchase.hasMany(purchase_movie)
purchase_movie.belongsTo(purchase, {
    foreignKey: "purchaseId",
});
users.hasMany(purchase) //***OJOTA */
purchase.belongsTo(users)

purchase.belongsTo(cinemas)
cinemas.hasMany(purchase)

purchase.belongsTo(screening)
screening.hasMany(purchase)

purchase.belongsTo(cinemaRoom)
cinemaRoom.hasMany(purchase)

// purchase.hasOne(seats)
seats.hasOne(purchase)

seats.belongsTo(screening)
screening.hasMany(seats)

seats.belongsTo(users)
users.hasOne(seats)

seats.belongsTo(cinemas)
cinemas.hasMany(seats)

screening.belongsTo(movies)
movies.hasMany(screening)

cinemaRoom.belongsToMany(movies, {through: 'movieCinemaRoom'})
movies.belongsToMany(cinemaRoom, {through: 'movieCinemaRoom'})

module.exports = {
    ...sequelize.models,
    conn: sequelize
}