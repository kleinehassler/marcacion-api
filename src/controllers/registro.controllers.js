const catchError = require('../utils/catchError');
const Registro = require('../models/Registro');

const getAll = catchError(async(req, res) => {
    const results = await Registro.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Registro.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Registro.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Registro.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});


module.exports = {
    getAll,
    create,
    getOne,
    remove
}
