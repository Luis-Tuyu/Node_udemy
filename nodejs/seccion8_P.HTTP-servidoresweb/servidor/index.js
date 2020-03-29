const express = require("express");
const server = express(); //nos devuelve un objeto tipo express
const fs = require("fs");

const home = fs.readFileSync("./index.html")
const about = fs.readFileSync("./about.html")
//pedir y responder
server.get("/",getHomePag); //no le ponemos parentesis porque esto lo
// hace express

server.get("/about",(req, res)=>{
    res.write(about) //respodemos con el archivo 
});

function getHomePag(req, res)
{
    return res.write(home);
}
server.listen(8080, ()=>{
    console.log("El server is running" + 8080);
});


//HTTPS methods

/*
-GET : lectura 
-POST:  crear  un nuevo recurso
-PUT:  reemplazr un recurso existente
-PATCH: actualizar una propiedad de un recurso
-DELETE: remover un recurso
*/