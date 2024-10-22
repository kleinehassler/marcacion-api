const { getAll, create, getOne, remove } = require('../controllers/empleado.controllers');
const express = require('express');

const routerEmpleado = express.Router();

routerEmpleado.route('/')
    .get(getAll)
    .post(create);

routerEmpleado.route('/:id')
    .get(getOne)
    .delete(remove);

module.exports = routerEmpleado;
