var cat = function(obj) {
    obj.getName = function() {
        return this.name;
      }
    obj.getFood = function() {
        return 'mice';
      }
    obj.speak = function() {
        return 'Got any mice for' + this.getName();
      }
    return obj;
};

var kitty = cat({
    name: 'Kitty'
    });

// Got any mice for Kitty?
  console.log(kitty.speak());
