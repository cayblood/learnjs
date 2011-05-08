
var base = function(inId) {
    var obj = {id: inId};
    obj.getId = function() {
        return obj.id
    };
    return obj;
}
var widget = function(id) {
    var obj = base(id);
    obj.render = function(target) {
        console.log('renderd widget ' + obj.getId() + " on target " + target);
    };
    return obj;
}

var pages = function(id) {
    var obj = base(id);
    obj.widgets = [];
    return widget(obj);
}

var PageService = function() {
    var p = pages('hello');
    p.widgets = [widget('w1'), widget('w2')];

    return {
        get: function(id, callback) {
            var w = p.widgets.filter(function(obj) {
                        return obj.getId() === id;
                    });
            if(w.length === 1) {
                callback(w[0]);
            } else {
                console.log("Id was not unique");
            }
        }
    }
}


var ps = new PageService();
ps.get('w1', function(page) {
    page.render('target');
});
