const express = require('express'); //importamos la libreria de express
const server = express();

const fs = require('fs'); //importar la libreria file sistem
const home = fs.readFileSync('./index.html'); //nuevo
const about = fs.readFileSync('./about.html');

// ruta-callback(request, response)
server.get('/',(req, resp)=>
{
    resp.write(home);
})

server.get('/about',(req, resp)=>
{
    resp.write(about);
})

server.listen(8080, ()=>{
    console.log("Server is running on port 8080");
})


//Https

//Get->Lectura
//POST ->Crear un nuevo recurso
//Put ->Reemplazar un recurso existente
//PATCH -> Actualizar un propiedad de un recurso
//DELETE -> Remover un recurso
