// ./config/database.js

const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    {
       username: 'root',
       password: null, // ou '', dependendo da configuração do seu ambiente
       database: 'viber',
       host: 'localhost',
       dialect: 'mysql'
   }
 );

module.exports = sequelize;
