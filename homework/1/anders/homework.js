builder = function(name,value,base) {
	if(!typeof(name) === "string") {
		throw "Error";
	}
	var o = base || {};
	o[name] = value;
	return o;
};

var abcd = builder("c","d",builder("a","b"));


if (typeof(aptana) === "object") {
	aptana.log(abcd.a);
}
else if (typeof(console) === "object") {
		console.log(abcd.a);
}

