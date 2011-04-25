portal.declare('portal.model.widget', function(def) {
  var widget = {};
  widget.id = def.id;
  widget.render = function(target) {
    console.log('render widget ' + widget.id + ' in ' + target);
  };
  return widget;
});