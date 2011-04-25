function builder(name, value, base) {
  var real_base = base || {};
  real_base[name] = value;
  return real_base;
}

var abcd = builder("c", "d", builder("a", "b"));
console.log(abcd.a);
