const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (Sequelize) => {

    return Sequelize.define(
        'seats', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: UUIDV4
            },
            row: {
                type: DataTypes.STRING
            },
            number: {
                type: DataTypes.INTEGER,
                autoIncrement: true
            },
            isAvailable: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            }
        }, { timestamps: false }
    )
};