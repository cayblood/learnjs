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