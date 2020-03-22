//modificamos el mismo ejemplo para el async y l await
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
async function getbook(id) {
        let book = DBbook.find((lib) => lib.id === id);
        if (!book) {
            const error = new Error();
            error.message = "Book not found";
            throw error; //devolvemos el error
    }
    return book; //si no ocurre un error
}

//fución que busque el autor
async function getAutor(id)
{ let  aut = AutorDB.find(au=>au.id === id)
    
        //console.log("Imprimiendo autor--->", aut)
        if(!aut)
        {
            let err = new Error();
            err.message = "Author not found, sorry";
            throw err;
        }
    return aut;
}

//creamos una función principal

 async function main(){

    try{
        const book = await getbook(6); //esperará que finalice la promesa
       // const Author = getAutor(book.autor);
        console.log(`This book ${book.title}`);
    }catch(ex)
    {
        console.log(ex.message); //porque los rejects, así lo manejan
        
    }
   

}
 main();