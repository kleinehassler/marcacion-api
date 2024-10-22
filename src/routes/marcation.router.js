const { getAll, create, getOne, remove } = require('../controllers/marcation.controllers');
const express = require('express');

const routerMarcation = express.Router();

routerMarcation.route('/')
    .get(getAll)
    .post(create);

routerMarcation.route('/:id')
    .get(getOne)
    .delete(remove);

module.exports = routerMarcation;