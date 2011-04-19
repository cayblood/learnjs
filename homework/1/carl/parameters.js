function myfunc(arg1, arg2, arg3, arg4, arg5) {
  console.log(arg1);
  console.log(arg2);
  console.log(arg3);
  console.log(arg4);
  console.log(arg5);
  console.log(arguments);
}

var Builder = function() {
  var obj = {};
  return {
    add: function(key, val) {
      obj[key] = val;
      return this;
    },
    build: function() {
      return obj;
    }
  }
}

var obj = new Builder().add('add', 'val').add('prop2', 'val2').build();

console.log(obj.add);
console.log(obj.prop2);
console.log(Builder().obj);

// myfunc(1, 2, 3, 4);
