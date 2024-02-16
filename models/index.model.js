const sequelize = require('../config/db-connection.config');

const ConnectToDatabase = async ()=> {
    await sequelize.authenticate()
    await sequelize.sync({ alter:true })
}

module.exports = ConnectToDatabase

