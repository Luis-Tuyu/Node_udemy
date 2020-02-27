const person = {
        name: 'Luis',
        lastanme: 'Tuyu',
        isStuden: true,
        getFullName() {
            return this.name + " " + this.lastanme
        }
    }
    //maneras de accedera los objetos dentro de J

console.log(person.getFullName());

//usar una clase como plantilla

class person_c {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name;
    }
}

const person2 = new person_c("Luis");
let name = person2.getName();
console.log("Nombre->", name);