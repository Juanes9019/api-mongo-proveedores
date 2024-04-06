const { Router } = require('express');
const router = Router();
const { proveedoresGet, proveedoresPost, proveedoresPut, proveedoresDelete } = require('../controllers/proveedor');

// Ruta para obtener todos los proveedores (GET '/')
router.get('/', proveedoresGet);

// Ruta para crear un nuevo proveedor (POST '/')
router.post('/', proveedoresPost);

// Ruta para actualizar un proveedor existente (PUT '/:idProveedor')
router.put('/:id_proveedor', proveedoresPut); // Cambiar _id a id_proveedor

// Ruta para eliminar un proveedor existente (DELETE '/:idProveedor')
router.delete('/:id_proveedor', proveedoresDelete); // Cambiar _id a id_proveedor

module.exports = router;
