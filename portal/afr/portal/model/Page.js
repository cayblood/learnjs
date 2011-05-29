dojo.provide("portal.model.Page");

dojo.require("portal.model.Widget");


portal.model.Page.create = function(id){
    var widgets = [];
    
    var that = portal.Base(id);
    
    that.setWidgets = function(ws){
        if (ws.isArray()) {
            widgets = ws;
        }
    };
    
    that.addWidget = function(w){
        widgets.push(w);
    };
    
    that.render = function(){
    	
    };
    
    return that;
};
