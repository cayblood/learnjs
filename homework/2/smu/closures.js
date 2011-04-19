/*
	closures to encapsulate functionallity
*/

var Counter = function() {
	var private = 0;
	return {
		count: function() {
			private++;
			return this;
		},
		print: function() {
			console.log("count is: " + private);
		}
	}
}

// new Counter().count().count().count().print();

/*
	closures as callbacks
*/

var Timer = function(ticks) {
	var callback = function() {
		console.log('tick');
		if (!--ticks) {
			window.clearInterval(interval);
		}
	}
	var interval = window.setInterval(callback, 1000);
}

// new Timer(3);

var Ajax = function(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			console.log(xhr.responseText);
		}
	};
	xhr.open("GET", url, true);
	xhr.send('');
}

// new Ajax('closures.html');
