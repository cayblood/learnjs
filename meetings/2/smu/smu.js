/*
	function that returns curried function
*/

var calc = function(num, mult) {
	return function() {
		console.log('the number is: ' + num * mult);
	}
}

calc(2,2)();

/* 
	create list with closures - not very pretty...
*/

function createList(list) {
	var result = [];
  	for (var i = 0; i < list.length; i++) {
    	var item = 'item ' + i;
    	result.push((function(item, i) {
    		return function() {
	    		console.log(item + ' -> ' + list[i]);
    		}
	    })(item, i));
 	 }
  	return result;
}

function runList() {
	var dList = createList(['a', 'b', 'c']);
	for (var i = 0; i < dList.length; i++) {
    	dList[i]();
	}
}

runList();
