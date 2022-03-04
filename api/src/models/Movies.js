const { DataTypes } = require('sequelize')

module.exports = (Sequelize) => {
    return Sequelize.define('movies', {
        title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        rating: {
            type: DataTypes.FLOAT
        },
        description: {
            type: DataTypes.TEXT
        },
        actors: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        director: {
            type: DataTypes.STRING,
        },
        usersRating: {
            type: DataTypes.FLOAT
        },
        votes: {
            type: DataTypes.INTEGER
        },
        availability: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        price: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.TEXT
        },
        trailer: {
            type: DataTypes.TEXT
        },
        runTime: {
            type: DataTypes.STRING
        },
        classification: {
            type: DataTypes.STRING
        }
    }, { timestamps: false })
}