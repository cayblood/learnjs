var cat = function(spec) {
	spec = typeof spec == "object" ? spec : {};
	return {
		getName: function() {return spec.name || "NOT NAMED";},
		getFood: function() {return "mice";},
		speak : function() {return "Got any " + this.getFood() + " for " + (spec.name?spec.name:"NOT NAMED") + "?";}
	};
};

var kitty = cat();

aptana.log(kitty.speak());

kitty = cat("helgepus");

aptana.log(kitty.speak());

kitty = cat({name:"helgepus"});

aptana.log(kitty.speak());







