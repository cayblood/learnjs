var arr = ["ohai", 1.1, false, {}, []];
arr.sort();

var iter = function(arr, fn, idx) {
  idx = idx || 0;
  if (fn && arr && arr.length > idx) {
    fn(arr[idx]);
    iter(arr, fn, ++idx);
  }
}

iter(arr, function(elem) {
  console.log(elem);
});


// js 1.6 sweetness

arr.forEach(function(obj) {
  console.log(obj);
});