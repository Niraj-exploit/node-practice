const { DataTypes } = require('sequelize')
const sequelize = require('../config/db-connection.config')


const Book = sequelize.define('books', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    author: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT
    },
    category: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    }
})


module.exports = Book 