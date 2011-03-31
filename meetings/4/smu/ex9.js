var cat = function(spec) {
	return {
		getName: function() {
			return spec.name;
		},
		getFood: function() {
			return 'mice';
		},
		speak: function() {
			return 'Got any ' + this.getFood() + ' for ' + this.getName() + '?'
		}
	}
}

var lolcat = function(spec) {
	var lolcat = cat(spec);
	lolcat.getFood = function() {
		return 'cheezburgers';
	}
	return lolcat;
}

var annoy = function(cat) {
	var speak = cat.speak;
	cat.speak = function() {
		return speak.apply(this).toUpperCase() + '!??!';
	}
	return cat;
}

var kitty = cat({
	name: 'Kitty'
});

annoy(kitty);

console.log(kitty.speak());

var tacocat = lolcat({
	name: 'Tacocat'
});

annoy(tacocat);

console.log(tacocat.speak());
