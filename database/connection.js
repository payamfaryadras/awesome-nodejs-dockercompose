const Sequelize = require("sequelize");
const sequelize = new Sequelize('db_test', 'root', 'root', {
    host: 'mysql', dialect: 'mysql'
});