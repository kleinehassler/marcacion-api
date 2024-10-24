const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../utils/connection');

const Registro = sequelize.define('registro', {
    codigoqr: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fec_reg: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()')
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: true, 
        defaultValue: 1
    }
});

module.exports = Registro;
