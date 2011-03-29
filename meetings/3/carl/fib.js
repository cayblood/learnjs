var Fibonacci = function() {
  var privCalc = function(val) {
    if (val <= 2) {
      return val;
    } else {
      return privCalc(val - 1) + privCalc(val - 2);
    }
  };
  return {
    calc: privCalc
  };
}();

for (var i = 1; i < 10; i++) {
  console.log(Fibonacci.calc(i));
}