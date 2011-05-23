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
