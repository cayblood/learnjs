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

function extend(base, fn) {
  fn.prototype = new base();
  return fn;
}

var Mordi = extend(Person, function() {
  this.speak = function() {
    return "Mordi " + this.getName();
  }
});

var smu = new Mordi().setName('SMU');

// SMU is a 1337 HAXX0R
console.log(smu.speak())
