(function() {
  var g = global;
  g.portal = {
    declare: function(pckg, fn) {
      var crnt = g;
      pckg.split('\.').forEach(function(part, idx, arr) {
        crnt = crnt[part] || (crnt[part] = (idx == arr.length -1 ) ? fn || {} : {});
      });
    }
  };
}());

portal.declare('portal.model.page', function(def) {
  var page = {};
  page.id = def.id;
  page.widgets = [];
  page.render = function(target) {
    console.log('render page ' + this.id + ' in ' + target);
    this.widgets.forEach(function(widget) {
      widget.render('page_' + def.id);
    });
  }
  return page;
});

portal.declare('portal.model.widget', function(def) {
  var widget = {};
  widget.id = def.id;
  widget.render = function(target) {
    console.log('render widget ' + widget.id + ' in ' + target);
  };
  return widget;
});

portal.declare('portal.dao.PageDao', function() {
  var json = {
    id: 42, 
    widgets: [
      {id: 12}, 
      {id: 14}, 
      {id: 19}
    ]
  };
  return {
    get: function(id, cb) {
      cb(json);
    }
  };
});

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

var pageDao = new portal.dao.PageDao();
var pageService = new portal.service.PageService(pageDao);

pageService.get('42', function(page) {
  page.render('my_target');
});

