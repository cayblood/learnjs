/**** Portal v1 ****/
var portal = portal || {};


portal.base = function(id){
    return {
        getId: function(){
            return id;
        },
        render: function(target){
        }
    };
};

/**** Widget ****/

portal.widget = function(spec){
    var that;
    var widgets;
    
    widgets = [];
    that = portal.base(spec.id);
    
    var filterWidgetsOnId = function(id){
        widgets = widgets.filter(function(e, idx, arr){
            return e.id === id;
        });
    };
    
    that.addWidget = function(w){
        widgets.push(w);
    };
    that.removeWidget = function(id){
        filterWidgetsOnId(id);
    };
    that.widgets = function(){
        return widgets;
    };
    that.getWidget = function(id){
        return widgets[id];
    };
    that.render = function(target){
    	aptana.log("Render widget: " + that.getId() + " on target: " + target);
		that.widgets().forEach(function(w,idx,ws){
			w.render(that.getId());
		});
    };
    return that;
};

/**** Page ****/
portal.page = function(spec){
    var that;
    that = portal.widget(spec);
    that.render = function(target){
		aptana.log("Render page: " + that.getId() + " on target: " + target);
		that.widgets().forEach(function(w,idx,ws){
			w.render(that.getId());
		});
    };
    return that;
};

/**** Service ****/

portal.pageService = (function(){
    return {
        get: function(id, renderCb){
			var p = server.loadPage(id);
            renderCb(p);
        }
    };
    
})();

/**** Dummy server ****/
var server = function(){
	return {
		loadPage: function(id) {
			var p =  portal.page({id:id});
			var w = portal.widget({id:"w1"});
			w.addWidget(portal.widget({id:"w1_1"}));
			p.addWidget(w);
			w = portal.widget({id:"w2"});
			w.addWidget(portal.widget({id:"w2_1"}));
			p.addWidget(w);
			return p;
		}
	};
}();

/**** Test it ****/
portal.pageService.get("dummy",function(page) {
	page.render("dummyTarget");
});

