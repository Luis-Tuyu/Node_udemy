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
function getAlumn(id)
{ //buscamos dentro del arreglo
  return new Promise((resolve, reject)=>{
   
    let alum_obj = alumnosDB.find(matricula=>matricula.mat=== id);
   if(!alum_obj){
       const error = new Error();
       error.message = "Alumno no encontrado";
       reject(error);
   }else{
       resolve(alum_obj);
   }

  });
    

}

function getEscuela(id_school)
{   return new Promise((resolve, reject)=>{

    let escuela_obj = escuelasDB.find(escuela=>escuela.id === id_school)
   if(!escuela_obj)
   { const error_school = new Error();
       error_school.message = "Escuela no encontrada";
       reject(error_school);
   }else{
       resolve(escuela_obj);
   }

});
    
    
}

getAlumn(2).then(alumno=>{
    console.log("Alumno: "+alumno.nombre);
    return getEscuela(alumno.mat_esc)
}).then(escuela=>{
        console.log("Escuela: "+escuela.nombre);
}).catch(err => console.log(err.message))

