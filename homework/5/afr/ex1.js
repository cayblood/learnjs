var input = ["a",12.4,true,["a",12.4],{a:12.4}];

for(var i in input) {
	aptana.log(input[i]);
}

for(var i=0;i<input.length;i++) {
	aptana.log(input[i]);
}


function printAllArgs() {
	var arr = [].slice.apply(arguments);
	for(var i=0;i<arr.length;i++) {
		aptana.log(arr[i]);
	}
}

printAllArgs("a",12.4,true,["a",12.4],{a:12.4});
printAllArgs(input);

