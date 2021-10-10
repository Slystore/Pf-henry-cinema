const { DataTypes } = require('sequelize')

module.exports = (Sequelize) => {
    return Sequelize.define('movies', {
        // id: {
        //     type: DataTypes.UUID,
        //     defaultValue: DataTypes.UUIDV4,
        //     primaryKey: true,
        // },
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
        runTime: {
            type: DataTypes.STRING
        }
    }, { timestamps: false })
}