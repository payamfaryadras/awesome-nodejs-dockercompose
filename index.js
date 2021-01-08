const Sequelize = require('sequelize')
const express = require('express');
const app = express();
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, 'root', process.env.DB_ROOT_PASSWORD, {
    host: process.env.MYSQL_SERVICE, dialect: 'mysql'
});

var port = process.env.PORT || 4000;


app.get('/', function (req, res) {
    let message = ""
    sequelize
        .authenticate()
        .then(() => {
            message = "Connection has been established successfully.";
            console.log(message);
        })
        .catch(err => {
            message = 'Unable to connect to the database:'+ err;
            console.error(message);
        });
    res.send(message);
});


app.listen(port, function () {
    console.log('Sample mySQL app listening on port ' + port);
});