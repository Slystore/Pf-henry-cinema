const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (Sequelize) => {

  return Sequelize.define(
    "screening", {
          time: {
          type: DataTypes.INTEGER
      }
    },
    {});
};

