const express = require('express');
const router = express.Router();
const controlador = require('../controladores/controladorUsuarios');

router.get('/', controlador.list);
router.post('/crearUsuario', controlador.crear);
router.post('/eliminarUsuario/:id', controlador.eliminar);
router.post('/editarUsuario/:id', controlador.editar);

module.exports = router;