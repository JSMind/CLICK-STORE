// Importación de modulos necesarios a utilizar
const fetch = require('node-fetch');

// Funciones a emplear
async function getApi(url){
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
}

// Exportar los modulos
module.exports = (app) => {

    app.get('/', async(req,res) => {
        try {
            async function getRespuesta(){
                const respuesta = await getApi(process.env.CATEGORIAS);
                return respuesta;
            }
            res.status(200).send(await getRespuesta());
        } catch (error) {
            console.log('Error en el método GET de la app');
            res.status(400).json(error.message);
        }
    });

    app.get('/categoria=:idcategoria', async(req,res)=>{
        try {
            const idcategoria = req.params.idcategoria;
            async function getRespuesta(){
                let respuesta = await getApi(process.env.SUBCATEGORIAS+idcategoria);
                return respuesta;
            }
            res.status(200).send(await getRespuesta());
        } catch (error) {
            console.log('Error en el método GET de la app');
            res.status(400).json(error.message);
        }
    });

    app.get('/subcategoria=:idsubcategoria', async(req,res)=>{
        try {
            const idsubcategoria = req.params.idsubcategoria;
            async function getRespuesta(){
                let respuesta = await getApi(process.env.PRODUCTOS+idsubcategoria);
                return respuesta;
            }
            res.status(200).send(await getRespuesta());            
        } catch (error) {
            console.log('Error en el método GET de la app');
            res.status(400).json(error.message);
        }
    });
}