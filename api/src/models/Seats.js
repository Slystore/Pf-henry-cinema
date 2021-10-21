const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (Sequelize) => {

    return Sequelize.define(
        'seats', {
            
            number: {
                type: DataTypes.INTEGER,
            },
            isAvailable: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            }
        }, { timestamps: false }
    )
};