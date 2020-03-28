const http = require("http");
const fs = require("fs"); //file system
const html = fs.readFileSync('./index.html')

http.createServer((request, response)=>{

    response.writeHead(200,{"Content-Type": "text/html"}); //lo de text/html está predifinido
    response.write(html);
    response.end();
})
.listen(8080); //concatennado metodos y creando un servidor

