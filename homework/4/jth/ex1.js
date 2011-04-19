var Pers = function() {
  var name; 
  return {
    getName: function() {
      return name;
    },
    setName: function(newName) {
      name = newName;
    },
    speak: function() {
      return "Hi! I'm " + name;
    }
  };    
};

//It does not
var smu = Pers()
smu.setName('SMU');

// Hi! I'm SMU
console.log(smu.speak());
