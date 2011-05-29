dojo.provide("portal.Portal");
dojo.require("portal.service.Service");

portal.Base = function(id){
    return {
        getId: function(){
            return id;
        },
        render: function(target){
        }
    };
};

portal.Portal.init = function(pId){
	var service = portal.service.Service.create();
	service.get(pId,function(){});
}("p1");
