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

console.log(crtr(10, 10));