const {Schema, model} = require('mongoose'); // Importa las funciones Schema y model de mongoose para definir esquemas y modelos de datos

// Define el esquema del modelo Proveedor
const ProveedorSchema = Schema({

    // Define que el campo id_proveedor es obligatorio
    id_proveedor: { type: Number, required: [true, 'El id del proveedor es obligatorio'] },

    // Define que el campo nombre es obligatorio
    nombre: { type: String, required: [true, 'El nombre es obligatorio'] },

    // Define que el campo telefono es obligatorio
    telefono: { type: Number, required: [true, 'El telefonon es obligatorio'] },

    // Define que el campo email es obligatorio
    email: {type: String,required: [true, 'El email es obligatorio'] },

    // Define que el campo ubicacion es obligatorio
    ubicacion: { type: String, required: [true, 'La direccion es obligatorio'] },
})

// Crea y exporta el modelo Proveedor a partir del esquema ProveedorSchema
module.exports = model('Proveedor', ProveedorSchema)
