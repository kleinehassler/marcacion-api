const { getAll, create, getOne, remove } = require('../controllers/registro.controllers');
const express = require('express');

const routerRegistro = express.Router();

routerRegistro.route('/')
    .get(getAll)
    .post(create);

routerRegistro.route('/:id')
    .get(getOne)
    .delete(remove);

module.exports = routerRegistro;