const express = require('express');
const routerEmpleado = require('./empleado.router.js');
const routerMarcation = require('./marcation.router.js');
const routerRegistro = require('./registro.router.js');
const router = express.Router();

router.use("/marcations", routerMarcation);
router.use("/empleados", routerEmpleado);
router.use("/registros", routerRegistro);

module.exports = router;
