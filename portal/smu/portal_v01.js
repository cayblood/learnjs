
var each = function(list, fn) {
  for (var i = 0; i < list.length; i++) {
    fn(list[i]);
  }
};

var page = function(def) {
  def.render = function(target) {
    console.log('render page ' + this.id + ' in ' + target);
    each(this.widgets, function(widget) {
      widget.render('page_' + def.id);
    });
  };
  return def;
}

var widget = function(def) {
  def.render = function(target) {
    console.log('render widget ' + this.id + ' in ' + target);
  };
  return def;
}

var PageService = function() {
  var p = page({
    id: '42',
    widgets: []
  });

  each([32, 43, 21], function(i) {
    p.widgets.push(widget({
      id: i
    }));
  });

  return {
    get: function(id, cb) {
      cb(p);
    }
  }
};

var pageService = new PageService();

pageService.get('42', function(page) {
  page.render('my_target');
});