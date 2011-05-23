portal.declare('portal.base', function(inId) {
    var obj = {id: inId};
    obj.getId = function() {
        return obj.id
    };
    return obj;
});
