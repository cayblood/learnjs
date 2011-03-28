
var Caprica = {
    traverse: function(objs, fun) {
                  for(var obj in objs) {
                      if(objs.hasOwnProperty(obj)) {
                          if(typeof objs[obj] === 'object' || typeof objs[obj] === 'array'){
                              Caprica.traverse(objs[obj], fun);
                          } else if (typeof objs[obj] === 'string' || typeof objs[obj] === 'number') {
                              fun(obj, objs[obj]);
                          }
                      }
                  }
    },
    getData : function(data, name, callbackFun, delay) {
                  var match;
                  function findMatch(objName, obj) {
                      if(objName === name) {
                          match = obj;
                      }
                  }
    
                  Caprica.traverse(data, findMatch);
                  return (function(obj) {
                          setTimeout(callbackFun, delay, obj); 
                          }(match)
                         );
    },
    awsomePrint: function(st) {
                  console.log("This is awsome " + st);
    }
};

var t = {
    'name' : 'anders', 
    'age' : 56,
    'languages' : ['norwegian', 'sami'],
    'contactmethods' : {
        'pstn' : '1111',
        'isdn' : '2222',
        'fax' : '3333'
    } 
};
Caprica.getData(t, 'name', Caprica.awsomePrint, 2000);
Caprica.getData(t, 'isdn', Caprica.awsomePrint, 1000);
Caprica.getData(t, 'age', Caprica.awsomePrint, 500);
