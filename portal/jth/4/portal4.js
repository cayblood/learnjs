(function() {
    global.portal = {};
    global.portal.declare = function(packet, fn) {
      var names = packet.split('.');
      var d = global;
      names.forEach(function(part, idx, arr) {
        if (arr.length - 1 === idx ) {
          d[part] = fn || {};
        } else {
          d[part] = d[part] || {};
        }
        d = d[part];
      });
    };
    global.portal.require = function(packet) {
      var path = './';
      var names = packet.split('.');
      names.forEach(function(part, idx, arr) {
        if (arr.length - 1 === idx ) {
          path += part + '.js'
        } else {
          path += part + '/'
        }
      });
      require(path);
    };
})();

portal.require('portal.base');
portal.require('portal.model.widget');
portal.require('portal.model.page');
portal.require('portal.dao.PageDao');
portal.require('portal.service.PageService');

var pageDao = new portal.dao.PageDao();
var pageService = new portal.service.PageService(pageDao);

pageService.get('w1', function(page) {
    page.render("Mother");
});
