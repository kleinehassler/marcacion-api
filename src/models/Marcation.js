const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Marcation = sequelize.define('marcation', {
    empleadoid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fec_reg: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    user_reg: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ipregistro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_mark: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    hora_mark: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    actividad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    empleadoid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    iscontrol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        defaultValue: 1
    }
});

module.exports = Marcation;
