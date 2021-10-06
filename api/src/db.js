require('dotenv').config();
const { Sequelize } = require('sequelize');
const genresModel = require('./models/Genres')
const cinemasModel = require('./models/Cinemas')
const moviesModel = require('./models/Movies')
const usersModel = require('./models/User.js')
const purchaseModel = require('./models/Purchase')
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
rolesModel(sequelize)
genresModel(sequelize)
cinemasModel(sequelize)
moviesModel(sequelize)
usersModel(sequelize)
purchaseModel(sequelize)


const { genres, cinemas, movies, users, purchase,role } = sequelize.models;

users.belongsToMany(role,{through:'rolesDepend'})
role.belongsToMany(users,{through:'rolesDepend'})

genres.belongsToMany(movies, { through: 'moviesGenre' })
movies.belongsToMany(genres, { through: 'moviesGenre' })

movies.belongsToMany(cinemas, { through: 'moviesCinema' })
cinemas.belongsToMany(movies, { through: 'moviesCinema' })

movies.belongsToMany(purchase, { through: 'moviesPurchase' })
purchase.belongsToMany(movies, { through: 'moviesPurchase' })

users.hasOne(purchase, { through: 'userPurchase' })
purchase.belongsToMany(users, { through: 'userPurchase' })

module.exports = {
    ...sequelize.models,
    conn: sequelize
}