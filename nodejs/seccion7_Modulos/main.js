//cargar los modulos es decir, los datos
const {saludo, number} = require("./logger");
const {sumar,obtener_mayor} = require("./calcular");
saludo();
console.log(number);



numeros = [1,5,4,8,,0,4,6,8]
console.log("Sumar y mayor")
console.log("Suma: "+sumar(1,4));
console.log("Mayor:" +obtener_mayor(numeros));