var Person = function(personName) {
  var name = personName;
  this.getName = function() {
      return name;
  }
  this.setName =  function(newName) {
      name = newName;
      return this;
  }
  this.speak = function() {
      return "Hi! I'm" + name;
  }
  return this;    
};

var Mordi = function(personName) {
  this.setName(personName);
  this.speak = function() {
    return "Mordi " + this.getName();
  }
};

Mordi.prototype = new Person();
Mordi.prototype.constructor = Person;

var mor = new Person("HHH");
var smu = new Mordi("SMU");

// SMU is a 1337 HAXX0R
console.log(smu.speak())
