var CAP = {};

CAP.data = {
  'name' : 'anders', 
  'age' : 56,
  'languages' : ['norwegian', 'sami'],
  'contactMethods' : {
    'pstn' : '1111',
    'isdn' : '2222',
    'fax' : '3333'
  }	
};

CAP.source = {
	query: function(q, cb) {
		setTimeout(function() {
			cb({
				  'name' : 'name ' + q, 
				  'age' : 56,
				  'languages' : ['norwegian', 'sami'],
				  'contactMethods' : {
				    'pstn' : '1111',
				    'isdn' : '2222',
				    'fax' : '3333'
				  }
				}
			);
		}, Math.floor(Math.random() * 500));
	}
}

CAP.traverse = function(data, fn) {
	fn = fn || console.log;
	switch (typeof(data)) {
		case 'object':
			var key;
			for (key in data) {
				fn(key, data);
				CAP.traverse(data[key], fn);
			}
	}
};

for (var i = 0; i < 5; i++) {
	var q = 'ohai ' + i;
	(function(q) {
		CAP.source.query(q, function(data) {
			console.log('***');
			if ('name ' + q !== data.name) {
				throw 'huston, we have a problem!';
			}
			CAP.traverse(data, function(key, data) {
				console.log(key + ': ' + data[key]);
			});	
		});		
	}(q));	
}


