var cat = function(cat) {
  return {
    getName: function() {
      return cat.name;
    },
    getFood: function() {
      return 'mice';
    },
    speak: function() {
      return 'Got any ' + this.getFood() + ' for ' + this.getName() + '?'
    }
  }
}

var kitty = cat({
  name: 'Kitty'
});

console.log(kitty.speak());