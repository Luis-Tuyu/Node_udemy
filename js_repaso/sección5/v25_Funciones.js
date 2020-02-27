console.log("Funciones");

function mostrar() {
    console.log("Hola");
}

console.log(mostrar())
console.log("imprime undefined,becuase el return no se ha declarado ")

//funciones de parametros
let ejecutar = function(saludar, name) {
    saludar(name);
    console.log("Nombre desde la función", name)
}

let saludo = function(name) {
    console.log(`Hola ${name}`);
}

ejecutar(saludo, "DANIELA");

//funcion fleca
console.log();
console.log("FUNCION FLECHA");
const greetMe = (name) => {
    console.log(`Hola ${name}, estoy aprendiendo JS`);
}

greetMe("Luis");