var fun = function(i, fn) {
  if (i > 0) {
    fn(i);
    fun(--i, fn);
  }
};

var crtr = function(x, y) {
  var arr = [];
  fun(x, function(i) {
    arr[i - 1] = [];
    fun(y, function(j) {
      arr[i - 1][j - 1] = (j + i % 2) % 2;
    });
  });
  return arr;
}

console.log('- crtr v1 -');
console.log(crtr(10, 10));

var crtr2 = function() {
  var args = [].slice.call(arguments);
  var arr = typeof args[args.length -1] == 'object' ? args.pop() : [];
  var num = args.shift();
  if (arr !== num) {
    fun(num, function(i) {
      if (args.length) {
        arr[i] = [];
        var nargs = args.slice();
        nargs.push(arr[i]);
        crtr2.apply(this, nargs);
      } else {
        arr[i] = i % 2;
      }
    });
  }

  return arr;
}

console.log('- crtr v2 -');
console.log(crtr2(10, 10));

console.log('- awesome -');
console.log(crtr2(10, 10, 10));