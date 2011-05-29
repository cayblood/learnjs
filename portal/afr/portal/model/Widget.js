dojo.provide("portal.model.Widget");

portal.model.Widget.create = function(id){

    var that = portal.Base(id);
    
    that.getId = function(){
        return id;
    };
    
    that.render = function(){
    
    };
    
    return that;
};
