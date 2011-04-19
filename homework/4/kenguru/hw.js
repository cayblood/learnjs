var log = function (msg) {
    (typeof console !== 'undefined') ? console.log(msg) : echo(msg);
};

var Alien = function() {
    var name;
    return {
        getName : function() {
            return name;
        },
        setName : function(n) {
            name = n;
            return this;
        },
        speak : function() {
            return "こんにちは私は " + name + " だ"
        }
    }
};

var Person = function() {
    var name, instance = {};
    instance.getName = function() {
        return name;
    };
    instance.setName = function(val) {
        name = val;
        return instance;
    };
    instance.speak = function() {
        return "Hi! I'm " + name;
    };
    return instance;
};

var Hacker = function() {};
Hacker.prototype = new Alien();
//Hacker.prototype = Person();
Hacker.prototype.speak = function() {
    // SMU is a 1337 HAXX0R
    return this.name + " is a 1337 HAXX0R";
};

log("---with new operator---");
log(new Person().setName("SMU").speak());
log(new Alien().setName("Ken").speak());

log("---without new operator---");
log(Alien().setName("Ken").speak());
log("---without new operator---");
log(new Hacker().setName("Linus").speak());
log("--------------------------");
