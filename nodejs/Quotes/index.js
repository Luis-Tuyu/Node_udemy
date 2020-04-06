const expres = require("express");
const server = expres();
const {PORT} = require("./config");
const {HomeRoutes,QuotesRoutes}=require("./routes");

const {NotFoundMiddleware} = require("./middlewares")
server.use(expres.static("./public")); //middleware
server.use(expres.json());//convertimos los POST en JSON 

server.use ("/", HomeRoutes);
server.use ("/", QuotesRoutes);
server.use(NotFoundMiddleware);
server.use()

server.listen(PORT, ()=>{

    console.log(`Aplication running in PORT ${PORT}`)
});
