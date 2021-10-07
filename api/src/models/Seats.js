const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (Sequelize) => {
  return Sequelize.define(
    "seats",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      row: {
          type: DataTypes.STRING
      },
      number: {
          type: DataTypes.INTEGER
      }
    },
    {}
  );
};
