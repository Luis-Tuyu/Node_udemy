//const fruits = new Array();
const fruits = ["platano", "melon",
    function() {
        //console.log("Hola");
        return 1;
    }
];
console.log("fruta->" + fruits[2]());

//sets
console.log("Set, no permite repeticion(conjuntos)");
const students = new Set();
students.add(5);
students.add(5);
console.log(students);

//map
const est = new Map();
est.set("Nombre", "Luis");
est.set("edad", "20");
console.log(est);
est.set("color", "moreno");
console.log(est);