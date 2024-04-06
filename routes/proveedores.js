const { Router } = require('express');
const router = Router();
const { proveedoresGet, proveedoresPost, proveedoresPut, proveedoresDelete } = require('../controllers/proveedor');

// Ruta para obtener todos los proveedores (GET '/')
router.get('/', proveedoresGet);

// Ruta para crear un nuevo proveedor (POST '/')
router.post('/', proveedoresPost);

// Ruta para actualizar un proveedor existente (PUT '/:idProveedor')
router.put('/:_id', proveedoresPut);

// Ruta para eliminar un proveedor existente (DELETE '/:idProveedor')
router.delete('/:_id', proveedoresDelete);

module.exports = router;
