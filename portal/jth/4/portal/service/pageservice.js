portal.declare('portal.service.PageService', function(dao) {
    return {
        get: function(id, callback) {
             dao.get(id, function (json) {
                var p = portal.model.page(json.id);
                p.widgets = json.widgets.slice();
                callback(p);
             });
         }   
    };
});

