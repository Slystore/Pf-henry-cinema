const { DataTypes, UUIDV4 } = require('sequelize')

module.exports = (Sequelize) => {
    return Sequelize.define('cinemas', {

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.TEXT
        }
    }, { timestamps: false })
}