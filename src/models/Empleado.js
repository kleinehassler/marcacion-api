const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Empleado = sequelize.define('empleado', {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nationality: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cedula: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    isactivo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    user_reg: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_reg: {
        type: DataTypes.STRING,
        allowNull: false
    },
    qr_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    departamento: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    rol_empleado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Empleado;