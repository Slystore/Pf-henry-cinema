const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (Sequelize) => {
    return Sequelize.define(
        "shows", {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: UUIDV4
            },
            number: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true
            }
        }, { timestamps: false }
    );
};