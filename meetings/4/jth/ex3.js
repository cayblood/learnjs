var Person = function() {
  var name; 
  var getName = function() {
      return name;
  };
  var setName =  function(newName) {
      name = newName;
  };
  var speak = function() {
      return "Hi! I'm" + name;
  };
  return this;    
};

var smu = new Person().setName('SMUS');
console.log(smu.speak());
