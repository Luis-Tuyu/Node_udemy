let frutas = [
    "platano",
    "manzana",
    "pera"
];

//for
for (let a = 0; a < frutas.length; a++) {
    console.log(frutas[a]);
}
console.log()
console.log("Segunda manera de imprimir los datos");
for (let f of frutas) {
    console.log(f);
}

//for in
console.log("")
console.log("for in,, con JSON")
let people = [{
        name: "Luis",
        edad: 20
    },
    {
        name: "Daniela",
        edad: "Es mia"
    }
];

for (let p in people) {
    console.log(people[p]);
}