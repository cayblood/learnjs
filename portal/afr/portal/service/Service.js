dojo.provide("portal.service.Service");
dojo.require("portal.dao.PageDao");

portal.service.Service.create = function() {
	return {
		get: function(id,renderCb) {
			alert("id");
		}
	};
};

