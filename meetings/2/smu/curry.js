var curry = function() {
	var fn = arguments[0];
	var args = [].splice.call(arguments, 1);
	return function() {
		fn.apply(null, args.concat([].splice.call(arguments, 0)));
	}
}

var Alert = function(a, b, c) {
	console.log(a + ' ' + b + ' ' + c);	
};