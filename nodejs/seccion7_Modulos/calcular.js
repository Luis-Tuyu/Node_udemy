//hecha por nosotros
function sumar(a,b)
{
    return a+b;
}

function obtener_mayor(arreglo){
    let mayor= 0;
    for(i in arreglo)
    {
        if(mayor<arreglo[i])
        {
            mayor = arreglo[i];
        }
    }
    return mayor;

}

module.exports = {
    sumar, 
    obtener_mayor
}