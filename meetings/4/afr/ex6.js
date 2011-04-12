// Ex 5.
function Person(name){
    
    this.getName = function(){
        return name || "UNDEFINED";
    };
    
    this.setName = function(nm){
        name = nm;
        return this;
    };
    
    this.speak = function(){
        return "Hi I'm " + name;
    };
}

var afr = new Person("afr");

aptana.log(afr.speak());

var extend = function(base, fn){
    fn.prototype = new base();
    return fn;
};

var Hacker = extend(Person, function(name) {
	this.speak = function() {
		return "Hi I'm " + name + " the hacker";
	};
});

var afr = new Hacker("AFR");

aptana.log(afr.speak());

