var cat = function(obj) {
    return {
    getName: function() {
        return obj.name;
      },
    getFood: function() {
        return 'mice';
      },
    speak: function() {
        return 'Got any ' + this.getFood() + ' for' + this.getName();
      }
    }
};

var kitty = cat({
    name: 'Kitty'
    });

var lolcat = function(obj) {
   var lolobj = cat(obj);
   lolobj.getFood = function() {
      return 'cheezeburger';
   }
   return lolobj;
}

var tacocat = lolcat({
  name: 'Tacocat'
}
);

var annoy = function(cat) {
  var oldSpeak = cat.speak;
  cat.speak = function() {
    return oldSpeak.apply(this).toUpperCase() + '!??!';
  }
  return cat;
}

var kitty = cat({
    name: 'Kitty'
    });

annoy(kitty);

// GOT ANY MICE FOR KITTY?!??!
console.log(kitty.speak());

var tacocat = lolcat({
    name: 'Tacocat'
    });

annoy(tacocat);

// GOT ANY CHEEZBURGERS FOR TACOCAT?!??!
console.log(tacocat.speak());
