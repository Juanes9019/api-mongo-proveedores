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

const proveedoresPost = async(req, res = response) => {
    try {
        const {nombre, telefono, email, ubicacion} = req.body;
        const proveedor = new Proveedor({nombre, telefono, email, ubicacion});
        await proveedor.save();
        res.json({
            msg: 'Proveedor creado',
            proveedor
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Error en el servidor'});
    }
}

const proveedoresPut = async(req, res = response) => {
    try {
        const { id } = req.params; // Cambia _id a id
        const { nombre, telefono, email, ubicacion } = req.body;
        const proveedor = await Proveedor.findByIdAndUpdate(id, { nombre, telefono, email, ubicacion }, { new: true });
        res.json({
            msg: 'Proveedor actualizado',
            proveedor
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

const proveedoresDelete = async(req, res = response) => {
    try {
        const { id } = req.params; // Cambia _id a id
        const proveedor = await Proveedor.findByIdAndDelete(id);
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
