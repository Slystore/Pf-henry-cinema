const {DataTypes, UUIDV4 } = require('sequelize')

module.exports = (Sequelize) => {
    return Sequelize.define('genres',{
        
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{})
}