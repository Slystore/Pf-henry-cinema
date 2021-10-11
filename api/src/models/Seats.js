const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (Sequelize) => {

  return Sequelize.define(
    'seats',{
      row: {
        type: DataTypes.STRING
      },
      number: {
        type: DataTypes.INTEGER
      },
      isAvailable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },{}
  )
};
