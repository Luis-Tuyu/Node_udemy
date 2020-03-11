const http = require ("http");
const fs = require('fs'); //importar la libreria file sistem
const html = fs.readFileSync('./index.html'); //nuevo

http.createServer((request, response)=>{
    
    response.writeHead(200, {"Content-Type":"text/html"}) //Nuevo

    response.write(html);
    response.end();
}).listen(8080);

//request = peticion http del cliente hacia el ervidor
//response = respuesta al clienteg