require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const { Sequelize } = require('sequelize');

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
