var Person = function() {
  var name; 
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

var Hacker = function() {
  this.speak = function() {
    return this.getName() +  " is a 1337 HAXX0R";
  }
};

Hacker.prototype = new Person();

var smu = new Hacker().setName('SMU');

// SMU is a 1337 HAXX0R
console.log(smu.speak())
