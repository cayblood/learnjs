(function(glbl) {
  var g = global || glbl;
  g.portal = {
    declare: function(pckg, fn) {
      var crnt = g;
      pckg.split('\.').forEach(function(part, idx, arr) {
        crnt = crnt[part] || (crnt[part] = (idx == arr.length -1 ) ? fn || {} : {});
      });
    },
    require: function(cl) {
      if (typeof require != 'undefined') {
        var path = cl.replace(/\./g, '/').replace('portal/', './') + '.js';
        require(path);
      } else {
        throw new Error('node.js is required...');
      }
    }
  };
}(this));

portal.require('portal.model.page')
portal.require('portal.model.widget');
portal.require('portal.dao.PageDao');
portal.require('portal.service.PageService');

var pageDao = new portal.dao.PageDao();
var pageService = new portal.service.PageService(pageDao);

pageService.get('42', function(page) {
  page.render('my_target');
});

