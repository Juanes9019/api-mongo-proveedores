const { Router } = require('express'); // Importa la función Router de express para crear un router

const router = Router(); // Crea una instancia de Router
const { proveedoresGet, proveedoresPost, proveedoresPut, proveedoresDelete, PromGet } = 
require('../controllers/proveedor'); // Importa los controladores desde el archivo '../controllers/proveedore'

// Define rutas y asigna controladores a cada ruta
// Ruta para obtener todos los proveedores (GET '/')
router.get('/', proveedoresGet);

// Ruta para obtener el promedio de proveedores (GET '/promedio')
router.get('/promedio', PromGet);

// Ruta para crear un nuevo proveedor (POST '/')
router.post('/', proveedoresPost);

// Ruta para actualizar un proveedor existente (PUT '/')
router.put('/', proveedoresPut);

// Ruta para eliminar un proveedor existente (DELETE '/')
router.delete('/', proveedoresDelete);

// Exporta el router para que esté disponible para otros módulos
module.exports = router;