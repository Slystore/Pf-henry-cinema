const { DataTypes } = require('sequelize')

module.exports = (Sequelize) => {
    return Sequelize.define('movies', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.FLOAT
        },
        description: {
            type: DataTypes.TEXT
        },
        actors: {
            type: DataTypes.STRING,
        },
        director: {
            type: DataTypes.ARRAY,
        },
        usersRating: {
            type: DataTypes.FLOAT
        },
        votes: {
            type: DataTypes.INTEGER
        },
        availability: {
            type: DataTypes.BOOLEAN,
            defaultValue: 'True'
        },
        price: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.TEXT
        },
        summary: {
            type: DataTypes.TEXT
        },
        runTime: {
            type: DataTypes.STRING
        }
    }, { timestamps: false })
}