//creamos un JSON
 const alumnosDB= [{
     mat: 1,
     nombre: "Luis Tuyu",
     mat_esc:9081 //matricula de la escuela
 }, 
{
    mat: 2,
    nombre: "Luis CHI",
    mat_esc:9082
},
{
    mat: 3,
    nombre: "Felipe Medina",
    mat_esc:9083
}];

const escuelasDB = [{
    id:9081,
    nombre: "Intituto tecnologico de mérida",
},
{
    id:9082,
    nombre:"CEUM"
}];


//primero obtenedremos el objeto de los alumnos

//id es la matricula del alumno
function getAlumn(id, callback)
{ //buscamos dentro del arreglo
    let alum_obj = alumnosDB.find(matricula=>matricula.mat=== id);
    if(!alum_obj){
        const error = new Error();
        callback(error)
    }else{
        callback(null,alum_obj);
    }

}

function getEscuela(id_school, callback)
{   let escuela_obj = escuelasDB.find(escuela=>escuela.id === id_school)
    if(!escuela_obj)
    { const error_school = new Error();
        callback(error_school)
    }else{
        callback(null,escuela_obj);
    }
}

getAlumn(2,(error,alumno_obj)=>{

    if(error)
    {
        return console.log("ERROR alumno no encontrado")
    }else{
        //aqui encontraremo la escuela
        getEscuela(alumno_obj.mat_esc,(error, escuela)=>{
        if(error)
        {
            return console.log("El alumno no está registrado en alguna de las escuela");
        }else{
            console.log(alumno_obj.nombre+" pertenece a "+escuela.nombre);
        }
        })
    }
});


