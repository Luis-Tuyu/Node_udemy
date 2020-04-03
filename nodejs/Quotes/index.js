const expres = require("express")
const server = expres();
const {PORT} = require("./config")
const {HomeRoutes}  =require("./routes")



server.use(expres.static("./config")); //middleware
server.use(expres.json());//convertimos los POST en JSON 

server.use ("/", HomeRoutes);

server.listen(PORT, ()=>{

    console.log(`Aplication running in PORT ${PORT}`)
});
