// Ex 2.
function Person(){
    var name = "UNDEFINED";
	
	var that = this;
    
    this.getName = function(){
        return name;    
    };
	
	this.setName = function(name) {
		this.name = name;
	};
	
	this.speak = function() {
		return "Hi I'm " + this.name;
	};
	
	String.prototype.setName = function(name) {
		that.name = name;
	};
	
	String.prototype.speak = function() {
		return "Hi I'm " + that.name;
	};
	
	return name;
}

var afr = Person();
afr.setName("AFR");
var afr1 = new Person();
afr1.setName("AFR1");

aptana.log(afr.speak());
aptana.log(afr1.speak());
