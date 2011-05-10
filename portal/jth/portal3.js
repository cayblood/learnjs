(function() {
    global.portal = {};
    global.portal.declare = function(packet, fn) {
      var names = packet.split('.');
      var d = global;
      names.forEach(function(part, idx, arr) {
        if (arr.length - 1 === idx ) {
          d[part] = fn || {};
        } else {
          d[part] = d[part] || {};
        }
        d = d[part];
      });
    };
})();

portal.declare('portal.base', function(inId) {
    var obj = {id: inId};
    obj.getId = function() {
        return obj.id
    };
    return obj;
});

var widget = function(id) {
    var obj = portal.base(id);
    obj.render = function(target) {
        console.log('renderd widget ' + obj.getId() + " on target " + target);
    };
    return obj;
};

var pages = function(id) {
    var obj = portal.base(id);
    obj.widgets = [];
    obj.render = function(target) {
        for(var i=0; i < obj.widgets.length; i++) {
            obj.widgets[i].render("page rendernig " + obj.getId());
        };
    };
    return obj;
};

portal.declare('portal.dao');
portal.dao.Dao = function() {
    var json = portal.base("json");
    json.widgets = [widget('jw1'), widget('jw2')];

    return {
        get: function(id, callback) {
            callback(json);
        }
    };
};

var PageService = function(dao) {
    return {
        get: function(id, callback) {
            dao.get(id, function (json) {
                var p = pages(json.id);
                p.widgets = json.widgets.slice();
                callback(p);
             });
         }   
    };
};

var ps = new PageService(new portal.dao.Dao);
ps.get('w1', function(page) {
    page.render("Mother");
});
