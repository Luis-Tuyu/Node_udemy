const express = require("express");
const server = express();
const {PORT} = require("./config") //importamos la port del otro archivo

server.listen(PORT, ()=>{
    console.log(`Aplication running in PORT ${PORT}`);
    //console.log("Desde nodemon");

});