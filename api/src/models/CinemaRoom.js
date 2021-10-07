const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (Sequelize) => {
  return Sequelize.define(
    "cinemaRoom",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      name: {
          type: DataTypes.TEXT,
          allowNull: false
      },
      seatCount: {
          type: DataTypes.INTEGER
      }
    },
    {}
  );
};
