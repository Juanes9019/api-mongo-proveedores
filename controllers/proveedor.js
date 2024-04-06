const {response} = require('express');
const Proveedor = require('../modules/proveedor');

const proveedoresGet = async (req, res = response) => {
    try {
        const proveedores = await Proveedor.find();
        res.json({
            proveedores
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Error en el servidor'});
    }
}

const proveedoresPost = async (req, res = response) => {
    try {
        const { id_proveedor, nombre, telefono, email, ubicacion } = req.body;
        const proveedor = new Proveedor({ id_proveedor, nombre, telefono, email, ubicacion });
        await proveedor.save();
        res.json({
            msg: 'Proveedor creado',
            proveedor
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

// Controlador para actualizar un proveedor existente
const proveedoresPut = async (req, res = response) => {
    try {
        const { id_proveedor } = req.params; // Cambiar _id a id_proveedor
        const { nombre, telefono, email, ubicacion } = req.body;
        const proveedor = await Proveedor.findOneAndUpdate({ id_proveedor }, { nombre, telefono, email, ubicacion }, { new: true });

        if (!proveedor) {
            return res.status(404).json({
                msg: 'Proveedor no encontrado'
            });
        }

        res.json({
            msg: 'Proveedor actualizado',
            proveedor
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

// Controlador para eliminar un proveedor existente
const proveedoresDelete = async (req, res = response) => {
    try {
        const { id_proveedor } = req.params; // Cambiar _id a id_proveedor
        const proveedor = await Proveedor.findOneAndDelete({ id_proveedor });

        if (!proveedor) {
            return res.status(404).json({
                msg: 'Proveedor no encontrado'
            });
        }

        res.json({
            msg: 'Proveedor eliminado',
            proveedor
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

module.exports ={
    proveedoresGet,
    proveedoresPost,
    proveedoresPut,
    proveedoresDelete
}
