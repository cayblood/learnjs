
[].forEach || (Array.prototype.forEach = function(fn) {
  for (var i = 0; i < this.length; i++) {
    fn(this[i]);
  }
});

var page = function(def) {
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
};

var widget = function(def) {
  var widget = {};
  widget.id = def.id;
  widget.render = function(target) {
    console.log('render widget ' + widget.id + ' in ' + target);
  };
  return widget;
}

var PageDao = function() {
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
};

var PageService = function(dao) {
  return {
    get: function(id, cb) {
      dao.get(id, function(json) {
        var p = page(json);
        json.widgets.forEach(function(w) {
          p.widgets.push(widget(w));
        });
        cb(p);
      });
    }
  }
};

var pageDao = new PageDao();
var pageService = new PageService(pageDao);

pageService.get('42', function(page) {
  page.render('my_target');
});

