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

var kitty = lolcat();

aptana.log(kitty.speak());

kitty = lolcat("helgepus");

aptana.log(kitty.speak());

kitty = lolcat({name:"helgepus"});

aptana.log(kitty.speak());









