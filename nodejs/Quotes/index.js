const expres = require("express")
const server = expres();
const {PORT} = require("./config")

server.listen(PORT, ()=>{

    console.log(`Aplication running in PORT ${PORT}`)
});
