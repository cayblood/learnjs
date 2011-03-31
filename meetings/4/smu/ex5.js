var Person = function() {
  var name;
  this.setName = function(n) {
    name = n;
    return this;
  }
  this.getName = function() {
    return name;
  }
  this.speak = function() {
    return "Hi! I'm " + name;
  }
};

var extend = function(base, fn) {
  fn.prototype = new base();
  return fn;
}

var Hacker = extend(Person, function() {
  this.speak = function() {
    return this.getName() + " is a 1337 HAXX0R";
  }
});

var smu = new Hacker().setName('SMU');
console.log(smu.speak());
