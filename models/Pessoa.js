const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pessoa = sequelize.define('Pessoa', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  telefone: {
    type: DataTypes.STRING
  }
});

module.exports = Pessoa;
