const {DataTypes} = require('sequelize')

module.exports = (Sequelize) => {
    return Sequelize.define('movies',{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER
        },
        users_rating:{
            type: DataTypes.INTEGER
        },
        availability: {
            type: DataTypes.BOOLEAN,
            defaultValue: 'True'
        },
        price: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.TEXT,
            allowNull:true,
        },
        summary: {
            type: DataTypes.TEXT,
            allowNull:true,
        },
        runTime: {
            type: DataTypes.INTEGER,
        },
        genre: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull:true,
        },
       
    },{})
}