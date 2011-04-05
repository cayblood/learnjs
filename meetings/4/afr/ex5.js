// Ex 5.
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

var extend = function(base, fn){
    fn.prototype = new base();
    return fn;
};

var Hacker = extend(Person, function(){
	this.speak = function() {
		return "Hi I'm " + this.name + " the hacker";
	};
});


var afr = new Hacker().setName('AFR');

aptana.log(afr.speak());

//

function extender(base,sub) {
	sub.prototype = new Base();
}

