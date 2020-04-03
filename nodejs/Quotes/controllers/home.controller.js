
class HomeController{

    async index(req, res)
    {
        res.send({message: "Hello world"});
    }

}
module.exports = new HomeController();