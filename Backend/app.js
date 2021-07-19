// Importación de modulos necesarios a utilizar
const express = require('express');
const app = express();
require('dotenv').config();
const appRutas = require('./routes/app.routes');
const cors = require('cors');
const midd = require('./midd/midd');


// Configuración de nuestro servidor (Middlewares globales)
app.use(express.json());
app.use(cors());
app.use(midd.limite);

// Inicializamos nuestro servidor
app.listen(process.env.PORT, () => {
    console.log(`El servidor se ha iniciado correctamente en: ${process.env.HOST}:${process.env.PORT}`)
});

//Middleware para capturar errores
app.use((error, req,res,next)=> {
    if (error) {
        console.log(error)
        if (!res.headersSent) {
            res.status(500).send("Error en el servidor: " + error.message)
        }
    }
    next()
})

// Inicialización de las rutas
appRutas(app);