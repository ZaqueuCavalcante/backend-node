const { DataTypes } = require('sequelize');
const { sequelize } = require('../core/sequelize');

const Agenda = sequelize.define('Agenda', {
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  celular: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },

  rua: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  numero: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  bairro: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  cidade: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  estado: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  cep: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  complemento: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
})

module.exports = Agenda
