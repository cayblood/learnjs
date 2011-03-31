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

var tacocat = lolcat({
	name: 'Tacocat'
});

console.log(tacocat.speak());