// Ex 1.
function Person(){
    var name = "UNDEFINED";

    this.getName = function(){
        return name;    
    };
	
	this.setName = function(name) {
		this.name = name;
		return this;
	};
	
	this.speak = function() {
		return "Hi I'm " + this.name;
	};
}

var afr = new Person().setName("AFR");

aptana.log(afr.speak());