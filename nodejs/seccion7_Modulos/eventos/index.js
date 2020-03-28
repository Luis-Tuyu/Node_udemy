//ahora se utilizara una clase para simular lo evento
const EventEmitter = require("events")
const {SAVE} = require("./events-name")

const emiter = new EventEmitter();

emiter.on(SAVE, ()=>{
    console.log("On save activated");
});

emiter.on(SAVE, ()=>{
    console.log("On save activades 2");
});

emiter.emit('save');