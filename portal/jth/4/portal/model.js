
portal.declare('portal.widget', function(id) {
    var obj = portal.base(id);
    obj.render = function(target) {
        console.log('renderd widget ' + obj.getId() + " on target " + target);
    };
    return obj;
};
