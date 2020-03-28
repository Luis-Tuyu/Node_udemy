//simular un emisor de eventos
function Emitter(){
    this.events = {}
}


//agrego al objeto
Emitter.prototype.on =function(type, listener)
{ this.events[type] = this.events[type] || [];
    this.events[type].push(listener) //se agrega al arreglo
    
};


Emitter.prototype.emit = function(type)
{
    if(this.events[type])
    {
        this.events[type].forEach((listener) => listener())
    }
}

module.exports = Emitter;

//veamos con el prototype
console.log(Emitter.thisvalue);

obj = {
'uno': function(dato){console.log(dato);},
'dos': "77h"

}
console.log(obj['uno']);
