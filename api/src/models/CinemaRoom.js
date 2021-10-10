const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (Sequelize) => {

    return Sequelize.define(
        "cinemaRoom", {

            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            seatCount: {
                type: DataTypes.INTEGER
            }
        }, { timestamps: false }
    );
};

