const {DataTypes, UUIDV4 } = require('sequelize')

module.exports = (Sequelize) => {
    return Sequelize.define('purchase',{
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM({
              values: ["pending", "processing", "created", "cancelled", "completed"],
            }),
            allowNull: false
          },
        // ,
        // moviesPurchased: {
        //     type: DataTypes.ARRAY(DataTypes.JSON), // por cada pelicula recibe un json {id(pelicula), asientos}
        //     allowNull: false
        // },
        // user: {
        //     type: DataTypes.UUID,
        //     allowNull: false
        // },
        // value: {
        //     type: DataTypes.FLOAT,
        //     allowNull: false
        // },
        // payment: {
        //     type: DataTypes.JSON,
        //     allowNull: false
        // }
    },{})
}