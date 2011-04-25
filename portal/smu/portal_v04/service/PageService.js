portal.declare('portal.service.PageService', function(dao) {
  return {
    get: function(id, cb) {
      dao.get(id, function(json) {
        var p = portal.model.page(json);
        json.widgets.forEach(function(w) {
          p.widgets.push(portal.model.widget(w));
        });
        cb(p);
      });
    }
  }
});