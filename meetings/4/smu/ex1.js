var Person = function() {
  var name;
  this.setName = function(n) {
    name = n;
  }
  this.getName = function() {
    return name;
  }
  this.speak = function() {
    return "Hi! I'm " + name;
  }
};

var smu = new Person()
smu.setName('SMU');

// should print "Hi! I'm SMU"
console.log(smu.speak());
