const path = require('path'); //para controla el nombre de los archivos

function render(file, res)
{return res.sendFile(path.join(__dirname + `/../views/${file}.html`)); //devolver una página al responder con la petición
}

class HomeController{

    async index(req, res)
    {
        return render("home", res)
    }

    async about(req, res)
    {
        return render("about", res)
    }

}
module.exports = new HomeController();