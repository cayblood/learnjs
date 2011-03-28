
t = {
      'name' : 'anders', 
       'age' : 56,
       'languages' : ['norwegian', 'sami'],
       'contactMethods' : {
            'pstn' : '1111',
            'isdn' : '2222',
            'fax' : '3333'
        } 
};

function traverse(objs, fun) {
    for(var obj in objs) {
        if(objs.hasOwnProperty(obj)) {
            if(typeof objs[obj] === 'object' || typeof objs[obj] === 'array'){
                traverse(objs[obj], fun);
            } else if (typeof objs[obj] === 'string' || typeof objs[obj] === 'number') {
                fun(objs[obj]);
            }
       }
    }
}

traverse(t, console.log);
