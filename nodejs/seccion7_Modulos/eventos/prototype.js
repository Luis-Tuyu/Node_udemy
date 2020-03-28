var Person = function(name) {
    this.name = name;
    this.canTalk = true;
  };

  Person.prototype.greet = function() {
    if (this.canTalk) {
     return  console.log('Hi, I am ' + this.name);
    }
    
  };


const luis = new Person("Luis");

console.log(luis.greet());