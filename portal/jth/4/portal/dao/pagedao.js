portal.declare('portal.dao.PageDao', function() {
    var json = portal.base("json");
    json.widgets = [portal.model.widget('jw1'), portal.model.widget('jw2')];

    return {
        get: function(id, callback) {
            callback(json);
        }
    };
});
