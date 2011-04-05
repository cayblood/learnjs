// Ex 1.
function Person(){
    var name = "UNDEFINED";

    this.getName = function(){
        return name;    
    };
	
	this.setName = function(name) {
		this.name = name;
	};
	
	this.speak = function() {
		return "Hi I'm " + this.name;
	};
}

var afr = new Person();
afr.setName("AFR");

aptana.log(afr.speak());