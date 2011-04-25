portal.declare('portal.dao.PageDao', function() {
  var json = {
    id: 42, 
    widgets: [
      {id: 12}, 
      {id: 14}, 
      {id: 19}
    ]
  };
  return {
    get: function(id, cb) {
      cb(json);
    }
  };
});