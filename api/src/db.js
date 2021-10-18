require("dotenv").config();
const { Sequelize } = require("sequelize");
const genresModel = require("./models/Genres");
const cinemasModel = require("./models/Cinemas");
const moviesModel = require("./models/Movies");
const usersModel = require("./models/User.js");
const rolesModel = require("./models/Roles");
const purchaseModel = require("./models/Purchase");
const screeningModel = require("./models/Screening");
const roomModel = require("./models/CinemaRoom");
const seatsModel = require("./models/Seats");
const purchaseOrderModel = require("./models/purchaseOrder");
const Purchase = require("./models/Purchase");
const orderMpago = require('./models/OrderMpago')//prueba m pago
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

let sequelize =
    process.env.NODE_ENV === "production" ?
    new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
            max: 3,
            min: 1,
            idle: 10000,
        },
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
            keepAlive: true,
        },
        ssl: true,
    }) :
    new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
            logging: false,
            native: false
        }
    );
// const sequelize = new Sequelize(
//     `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
//         logging: false, // set to console.log to see the raw SQL queries
//         native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//     }
// );

rolesModel(sequelize);
genresModel(sequelize);
cinemasModel(sequelize);
moviesModel(sequelize);
usersModel(sequelize);
purchaseModel(sequelize);
screeningModel(sequelize);
roomModel(sequelize);
seatsModel(sequelize);
purchaseOrderModel(sequelize);
orderMpago(sequelize);//m pago

const {
    genres,
    cinemas,
    movies,
    users,
    purchase,
    screening,
    cinemaRoom,
    seats,
    role,
    purchaseOrder,
    order //m pago
} = sequelize.models;


users.belongsToMany(role, { through: "rolesDepend" });
role.belongsToMany(users, { through: "rolesDepend" });

genres.belongsToMany(movies, { through: "moviesGenre" });
movies.belongsToMany(genres, { through: "moviesGenre" });

movies.belongsToMany(cinemas, { through: "moviesCinema" });
cinemas.belongsToMany(movies, { through: "moviesCinema" });

cinemaRoom.belongsToMany(movies, { through: "movieCinemaRoom" });
movies.belongsToMany(cinemaRoom, { through: "movieCinemaRoom" });

cinemas.hasMany(cinemaRoom, {
    onDelete: "CASCADE",
});

cinemaRoom.belongsTo(cinemas, {
    onDelete: "CASCADE",
});

screening.belongsTo(movies);
movies.hasMany(screening);

screening.belongsTo(cinemaRoom);
cinemaRoom.hasMany(screening);

seats.belongsTo(cinemaRoom);
cinemaRoom.hasMany(seats);

movies.hasMany(purchase);
purchase.belongsTo(movies);

users.hasMany(purchase);
purchase.belongsTo(users);

purchase.belongsTo(cinemas);
cinemas.hasMany(purchase);

purchase.belongsTo(screening);
screening.hasMany(purchase);

purchase.belongsTo(cinemaRoom);
cinemaRoom.hasMany(purchase);

seats.hasOne(purchase);
purchase.belongsTo(seats);

seats.belongsTo(screening);
screening.hasMany(seats);

seats.belongsTo(users);
users.hasOne(seats);

seats.belongsTo(cinemas);
cinemas.hasMany(seats);

screening.belongsTo(movies);
movies.hasMany(screening);

users.hasMany(purchaseOrder)

purchaseOrder.belongsTo(users)
purchaseOrder.hasMany(purchase)

// POST users/cart/:id => por body, se debe meter un array de objetos para el carrito de compras. 
// Me tiene que llegar 

// ==============================
// purchaseOrder.hasMany(purchase) 
// purchase.hasOne(purchaseOrder)

// purchaseOrder.hasMany(purchase)
// purchase.belongsTo(purchaseOrder)

module.exports = {
    ...sequelize.models,
    conn: sequelize,
};