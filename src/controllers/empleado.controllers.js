const catchError = require('../utils/catchError');
const Empleado = require('../models/Empleado');

const getAll = catchError(async(req, res) => {
    const results = await Empleado.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Empleado.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Empleado.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Empleado.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});


module.exports = {
    getAll,
    create,
    getOne,
    remove
}
