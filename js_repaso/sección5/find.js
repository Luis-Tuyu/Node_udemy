 let datos = [1,4,5,6,7]

 function buscar(dat, arreglo)
 {
    const result = arreglo.find( dato=> dato === dat)
    return result;
 }

 console.log(buscar(4,datos));
 
