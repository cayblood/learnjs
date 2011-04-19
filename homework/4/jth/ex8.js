var cat = function(obj) {
    obj.getName = function() {
        return this.name;
      }
    obj.getFood = function() {
        return 'mice';
      }
    obj.speak = function() {
        return 'Got any ' + this.getFood() + ' for' + this.getName();
      }
    return obj;
};

var kitty = cat({
    name: 'Kitty'
    });

var lolcat = function(obj) {
   obj = cat(obj);
   obj.getFood = function() {
      return 'cheezeburger';
   }
   return obj;
}

var tacocat = lolcat({
  name: 'Tacocat'
}
);

// Got any mice for Kitty?
  console.log(tacocat.speak());
