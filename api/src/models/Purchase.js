const { DataTypes, UUIDV4 } = require('sequelize')

module.exports = (Sequelize) => {
    return Sequelize.define('purchase', {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        number: {
            type: DataTypes.INTEGER,
        },
        pagado: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        payment_id:{
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        payment_status:{
            type: DataTypes.STRING,
            defaultValue: ""
        },
        merchant_order_id: {
            type: DataTypes.BIGINT,
            defaultValue: 0
        }
    }, {})

}