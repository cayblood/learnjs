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

try {
  var smu = Person()
  smu.setName('SMU');
} catch (e) {
  console.log('Blows up because the this pointer now points to the global object');
}