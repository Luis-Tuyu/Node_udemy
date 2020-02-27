const DBbook = [{
    id: 1,
    title: "Clean code",
    autor: 1
},
{
    id: 2,
    title: "The best",
    autor: 2

},
{
    id: 3,
    title: "The last",
    autor:3
}
];

const AutorDB = [
{
    id:1,
    name: "Luis Tuyu"
},
{
    id:2,
    name: "Leonardo D."
}];

//funciones antiguas
function getbook(id, callback) {
    let book = DBbook.find((lib) => lib.id === id);
    if (!book) {
        const error = new Error();
        error.message = "Book not found";
    return callback(error);
    }

    callback(null, book);
    //le agreggo los dos en caso afirmativo
}




//fución que busque el autor
function getAutor(id,callback)
{ let  aut = AutorDB.find(au=>au.id === id)
    console.log("Imprimiendo autor--->", aut)
    if(!aut)
    {
        let err = new Error();
        err.message = "Author not found, sorry";
        callback(err)
    }
    callback(null,aut)
}

//ejecución
getbook(1,(err, book)=>
{
    if(err)
    {
        return console.log(err.message);
    }
    getAutor(book.autor, (err,Autor)=>{
        if(err)
        {
            return console.log(err.message);
        }
        console.log(`This book ${book.title} was written by ${Autor.name}`);
    })
});

