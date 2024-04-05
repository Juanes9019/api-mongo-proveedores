const {response} = require('express'); // Importa la función `response` desde el módulo express
const bcrypt = require('bcryptjs'); // Importa la librería bcryptjs para el cifrado de contraseñas

// Importar modelos
const Proveedor = require('../modules/proveedor'); // Importa el modelo de proveedor desde el módulo '../modules/usuario'
// Controlador para la solicitud GET a la ruta de proveedor


const proveedoresGet = async (req, res = response) => {
const body = req.query; // Extrae los parámetros de la consulta
const {q, nombre, page= 1, limit} = req.query; // Extrae los parámetros de la consulta
const proveedores = await Proveedor.find(); // Consulta todos los documentos de la colección proveedor

res.json({
        proveedores // Devuelve un objeto JSON con los proveedor obtenidos de la base de datos
    });
}

// Controlador para la solicitud GET de promedio de proveedores
const PromGet = async (req, res = response) => {
const body = req.query; // Extrae los parámetros de la consulta
const {q, nombre, page= 1, limit} = req.query; // Extrae los parámetros de la consulta
const proveedores = await Proveedor.find(); // Consulta todos los documentos de la colección Proveedor

proveedores.forEach(numero => console.log(numero)); // Muestra cada documento de usuario por consola
    res.json({
        msg: 'Prom API controlador', // Devuelve un mensaje indicando que es el controlador del promedio
        q,
        nombre,
        page,
        limit,
        proveedores // Devuelve los proveedores obtenidos de la base de datos
    });
}

// Controlador para la solicitud POST a la ruta de proveedores
const proveedoresPost = async(req, res = response) => {
const body = req.body; // Extrae el cuerpo de la solicitud

let msg = ''; // Inicializa una variable para el mensaje de respuesta
const proveedor = new Proveedor(body); // Crea un nuevo objeto Proveedor con los datos del cuerpo de la solicitud
const {nombre, email, password, rol, estado} = req.body; // Extrae los datos del cuerpo de la solicitud

try {
    // Encripta la contraseña antes de guardarla en la base de datos
    const salt = bcrypt.genSaltSync(10); // Genera una sal para el cifrado
    proveedor.password = bcrypt.hashSync(password, salt); // Cifra la contraseña con la sal generada
    await proveedor.save(); // Guarda el proveedor en la base de datos
    msg = 'proveedor Registrado'; // Asigna un mensaje de éxito

} catch (error) {
    console.log(error); // Muestra el error por consola
    if (error) {
        if (error.name === 'ValidationError') {
            console.error(Object.values(error.errors).map(val =>
            val.message)); // Muestra los mensajes de error de validación
            msg = Object.values(error.errors).map(val => val.message);
            // Asigna los mensajes de error al mensaje de respuesta
        }
    }
}

console.log(msg); // Muestra el mensaje de respuesta por consola
res.json({
    msg: msg // Devuelve el mensaje de respuesta como un objeto JSON
});
}

// Controlador para la solicitud PUT a la ruta de proveedores
const proveedoresPut = async(req, res = response) => {
    const body = req.query; // Extrae los parámetros de la consulta
    console.log(body); // Muestra los parámetros de la consulta por consola

    const {nombre, email, password, rol, estado} = req.body; // Extrae los datos del cuerpo de la solicitud

    // Busca y actualiza un proveedor en la base de datos
    const proveedor = await Proveedor.findOneAndUpdate({email: email}, {nombre: nombre, rol: rol});

    res.json({
        msg: 'proveedor Modificado', // Devuelve un mensaje indicando que se modificó el proveedor
        proveedor // Devuelve el proveedor modificado
    });
}

// Controlador para la solicitud DELETE a la ruta de proveedores
const proveedoresDelete = async(req, res = response) => {
    const body = req.query; // Extrae los parámetros de la consulta
    console.log(body); // Muestra los parámetros de la consulta por consola
    const {nombre, email, password, rol, estado} = req.query; // Extrae los datos del cuerpo de la solicitud

    // Busca y elimina un proveedor en la base de datos
    const proveedor = await Proveedor.findOneAndDelete({email: email});
    res.json({
        msg: 'proveedor Eliminado', // Devuelve un mensaje indicando que se eliminó el proveedor
        proveedor // Devuelve el proveedor eliminado
    });
}

// Exporta los controladores de las rutas de Proveedores para que estén disponibles para otros módulos
module.exports ={
    proveedoresGet,
    proveedoresPost,
    proveedoresPut,
    proveedoresDelete,
    PromGet
}

