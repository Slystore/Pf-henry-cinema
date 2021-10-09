const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (Sequelize) => {
    return Sequelize.define(
        "screening", {
            id: {
                type: DataTypes.UUID,
                defaultValue: UUIDV4,
                primaryKey: true,
            },
            time: {
                type: DataTypes.INTEGER
            }
        }, { timestamps: false }
    );
};