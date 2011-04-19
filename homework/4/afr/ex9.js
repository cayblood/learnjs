var cat = function(spec) {
	spec = typeof spec == "object" ? spec : {};
	return {
		getName: function() {return spec.name || "NOT NAMED";},
		getFood: function() {return "mice";},
		speak : function() {return "Got any " + this.getFood() + " for " + (spec.name?spec.name:"NOT NAMED") + "?";}
	};
};

var lolcat = function(spec) {
	var that = cat(spec);
	that.getFood = function() {return "cheezeburger";};
	return that;
};

function annoy(cat) {
	var oldSpeak = cat.speak;
	cat.speak = function() {
		return oldSpeak.apply(cat).toUpperCase() + " ?!??!";
	};
}

var kitty = cat({name:"helgepus"});

aptana.log(kitty.speak());

annoy(kitty);

aptana.log(kitty.speak());

kitty = lolcat({name:"helgepus"});

aptana.log(kitty.speak());

annoy(kitty);

aptana.log(kitty.speak());









