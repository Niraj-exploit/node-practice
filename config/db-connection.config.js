const Sequelize = require('sequelize')

// const sequelize = new Squelize('Database name', 'database username', 'database password, {option});

const sequelize = new Sequelize('node-practice', 'root', 'Niraj@123', {
    host: "localhost",
    dialect: "mysql"
})


module.exports = sequelize