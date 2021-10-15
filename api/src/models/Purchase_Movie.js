const { DataTypes } = require('sequelize');

module.exports = (Sequelize) => {
 return Sequelize.define("purchase_movie", {
    units: {
      type: DataTypes.INTEGER,
    },
    unitPrice: {
      type: DataTypes.FLOAT,
    },
  }, {});
};