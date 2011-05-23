portal.declare('portal.model.page', function(id) {
    var obj = portal.base(id);
    obj.widgets = [];
    obj.render = function(target) {
        for(var i=0; i < obj.widgets.length; i++) {
            obj.widgets[i].render("page rendernig " + obj.getId());
        };
    };
    return obj;
});
