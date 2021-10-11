const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (Sequelize) => {

  return Sequelize.define(
    'purchaseOrder',{
      fecha: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
      },
      // purchaseId: {
      //   type: DataTypes.ARRAY(DataTypes.STRING)
      // }
    },{}
  )
};
