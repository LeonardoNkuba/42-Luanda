const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const User = sequelize.define('User', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.ENUM('Aluno', 'Professor', 'Pai', 'Administrador'),
        allowNull: false
    },
    foto_perfil: {
        type: DataTypes.STRING
    },
    biografia: {
        type: DataTypes.TEXT
    },
    interesses: {
        type: DataTypes.TEXT
    },
    data_criacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

module.exports = User;
