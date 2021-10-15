const { DataTypes } = require('sequelize')

module.exports = (Sequelize) => {
    return Sequelize.define('genres', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: false })
}