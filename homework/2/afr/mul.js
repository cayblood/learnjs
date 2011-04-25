function mul() {
	return function(x,y) {
		return x * y;
	};
}

aptana.log("mul()(2,2) =  " + mul()(2,2));

var multiply = mul();

aptana.log("multiply(2,2) =  " + multiply(2,2));


// Calculator based on singleton pattern
var Calculator = (function() {
	var check = function(x,y){
		if(!typeof x === 'number' && !typeof y === 'number') {
			throw {
				name: 'IllegalArgumentException',
				message: 'x and y must be numbers'
			};
		}
	};
	return {
		add: function(x,y){
			check(x,y);
			return x+y;
		},
		sub: function(x,y){
			check(x,y);
			return x-y;
		},
		mul: function(x,y) {
			check(x,y);
			return x*y;			
		},
		div: function(x,y) {
			check(x,y);
			return x/y;
		}
	};
})();

aptana.log("Calculator.mul(2,2) = " + Calculator.mul(2,2));


// Other stuff
Number.prototype['*'] = function(x) {
	return this * x;
};

aptana.log("2['*'](2) = " + 2['*'](2));

aptana.log("new Number(2)['*'](2) = " + new Number(2)['*'](2));


Array.prototype.mul = function() {
	var prod = 1;
	if(this.length == 0) {
		return NaN;
	}
	for(var i = 0;i<this.length;i++) {
		prod *= this[i];
	}
	return prod;
};

aptana.log("[2,2].mul() = " + [2,2].mul());
