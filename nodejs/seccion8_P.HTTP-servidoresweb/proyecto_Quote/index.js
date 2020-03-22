const express = require("express");
const server = express();
const {PORT} = require("./config") //importamos la port del otro archivo
const {HomeRoutes} = require("./routes"); //importamos el método

//middleware
server.use(express.static('./public')); //verlo de manera publica
server.use(express.json());//tranformar las entradas POST EN JSON

server.use('/', HomeRoutes);

server.listen(PORT, ()=>{
    console.log(`Aplication running in PORT ${PORT}`);
    //console.log("Desde nodemon");

});