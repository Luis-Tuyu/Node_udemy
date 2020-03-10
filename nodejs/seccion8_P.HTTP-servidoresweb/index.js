const http = require ("http");
http.createServer((request, response)=>{

    response.write("Hello word");
    response.end();
}).listen(8080);

//request = peticion http del cliente hacia el ervidor
//response = respuesta al clienteg