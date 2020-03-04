function greet(){
    console.log("Hola");
}

//debemos de exportarlo
//export default greet; //esto es en ES6
//module.exports =greet;

//exportarlo como un objeto
module.exports = {
    greet,
    number:10
}