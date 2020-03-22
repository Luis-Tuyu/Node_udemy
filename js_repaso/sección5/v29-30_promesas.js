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

//funciones antiguas con las promesass
function getbook(id) {
    return new Promise((resolve, reject)=>{
        let book = DBbook.find((lib) => lib.id === id);
        if (!book) {
            const error = new Error();
            error.message = "Book not found";
        reject(error);
    }
    resolve(book); 

    });
    


}

//fución que busque el autor
function getAutor(id)
{ let  aut = AutorDB.find(au=>au.id === id)
    return new Promise((resolve, reject)=>{
        console.log("Imprimiendo autor--->", aut)
        if(!aut)
        {
            let err = new Error();
            err.message = "Author not found, sorry";
            reject(err)
        }
        resolve(aut);
    });
    

}

//Parte de las promesas, en la cual usamos
getbook(1).then(book =>{
    return getAutor(book.id);
}).then(autors =>{
console.log(autors);
}).catch(err =>{console.log(err.message);});
