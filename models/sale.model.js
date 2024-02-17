const { DataTypes } = require('sequelize')
const sequelize = require('../config/db-connection.config')

const Sale = sequelize.define("sales", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    book_id: {
        type: DataTypes.INTEGER
    },
    sales_price: {
        type: DataTypes.FLOAT
    }
})

module.exports = Sale