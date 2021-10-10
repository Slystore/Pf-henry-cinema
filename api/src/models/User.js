const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (Sequelize) => {
  return Sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          isAlpha:{
            msg:"Solo puede tener letras"
          },
          len:{
            args:[2,255],
            msg:"El nombre tiene que tener minimo dos caracteres"
          }
        }
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
        validate: {
          isEmail:{
            msg:"Debe ser un correo valido"
          }
        },
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len:{
            args:[6, 65],
            msg:"Debe tener minimo 6 caracteres"
          }
        },
      },
      userType:{
        type: DataTypes.ENUM("superadmin", "admin", "user", "banned", "disabled"),
        defaultValue: "user",
      }
    },
    {}
  );
};
