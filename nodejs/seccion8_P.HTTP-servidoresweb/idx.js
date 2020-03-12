const http = require ("http"); //Esto es una libreria
const fs = require('fs'); //importar la libreria file sistem

const home = fs.readFileSync('./index.html'); //nuevo
const about = fs.readFileSync('./about.html');

http.createServer((request, response)=>{
    const { url } = request; //deestructuramos dede el reques
    
    if( url == "/")
    {response.writeHead(200, {"Content-Type":"text/html"}) //Nuevo
    response.write(home);

    }else if (url == "/about")
    {response.writeHead(200, {"Content-Type":"text/html"}) //Nuevo
    response.write(about);
    }else{
        response.writeHead(404, {"Content-Type":"text/html"}) //Nuevo
        response.write('Page not found');
    }


    
    response.end();
}).listen(8080);

//request = peticion http del cliente hacia el ervidor
//response = respuesta al clienteg