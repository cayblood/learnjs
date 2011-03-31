var Person = function(name) {
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

var Hacker = extend(Person, function(name) {
  this.setName(name);
  this.speak = function() {
    return this.getName() + " is a 1337 HAXX0R";
  }
});

var ttr = new Person('TTR');
console.log(ttr.speak());

var smu = new Hacker('SMU');
console.log(smu.speak());
