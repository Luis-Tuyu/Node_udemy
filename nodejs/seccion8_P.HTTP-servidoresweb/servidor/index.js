const express = require("express");
const server = express(); //nos devuelve un objeto tipo express

server.listen(8080, ()=>{
    console.log("El server is running" + 8080);
});

