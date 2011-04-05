// Ex 4.
function Person(){
    var name = "UNDEFINED";
    
    this.getName = function(){
        return name;
    };
    
    this.setName = function(name){
        this.name = name;
        return this;
    };
    
    this.speak = function(){
        return "Hi I'm " + this.name;
    };
}

function Hacker(){
	this.speak = function() {
		return "Hi I'm " + this.name + " the hacker";
	};
}

Hacker.prototype = new Person();

var afr = new Hacker().setName("AFR");

aptana.log(afr.speak());

