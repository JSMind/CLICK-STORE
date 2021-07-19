// Importación de modulos necesarios a utilizar
const rateLimit = require('express-rate-limit')

// Construcción y exportación de los modulos
const limite = rateLimit({
    windowMs: 15 * 60 * 1000,
    max:50,
    message: 'Se excedio la cantidad máxima de intentos para acceder al servidor'
})

module.exports = {limite}