const {DataTypes, UUIDV4 } = require('sequelize')

module.exports = (Sequelize) => {
    return Sequelize.define('movies',{
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.FLOAT
        },
        users_rating:{
            type: DataTypes.FLOAT
        },
        availability: {
            type: DataTypes.BOOLEAN,
            defaultValue: 'True'
        },
        price: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.TEXT
        },
        summary: {
            type: DataTypes.TEXT
        },
        runTime: {
            type: DataTypes.INTEGER
        },
        genre: {
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        }
    },{})
}