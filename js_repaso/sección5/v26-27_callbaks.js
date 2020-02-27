console.log("usando callbakcs")

const DBbook = [{
        id: 1,
        title: "Clean code"
    },
    {
        id: 2,
        title: "The best"

    },
    {
        id: 3,
        title: "The last"
    }
];

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

//ejecutar a funcion
getbook(4,(err, book)=>
{
    if(err)
    {
        return console.log(err.message);
    }else{
        return console.log(book);
    }
});
