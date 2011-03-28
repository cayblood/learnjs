
function getData(data, name, callbackFun) {
    var match;
    function findMatch(objName, obj) {
        if(objName === name) {
            match = obj;
        }
    }
    
    traverse(data, findMatch);
    return (function(obj) {
                setTimeout(callbackFun, 2000, obj); 
            }(match)
           );
}

function traverse(objs, fun) {
    for(var obj in objs) {
        if(objs.hasOwnProperty(obj)) {
            if(typeof objs[obj] === 'object' || typeof objs[obj] === 'array'){
                traverse(objs[obj], fun);
            } else if (typeof objs[obj] === 'string' || typeof objs[obj] === 'number') {
                fun(obj, objs[obj]);
            }
       }
    }
}

function awsomePrint(st) {
    console.log("This is awsome " + st);
}

var t = {
    'name' : 'anders', 
    'age' : 56,
    'languages' : ['norwegian', 'sami'],
    'contactMethods' : {
        'pstn' : '1111',
        'isdn' : '2222',
        'fax' : '3333'
    } 
};
getData(t, 'name', awsomePrint);
