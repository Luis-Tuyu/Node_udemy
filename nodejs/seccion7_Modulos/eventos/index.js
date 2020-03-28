const Emitter = require("./emitter.js")

const emiter = new Emitter();

emiter.on('save', ()=>{
    console.log("On save activated");
});

emiter.on('save', ()=>{
    console.log("On save activades 2");
});

emiter.emit('save');