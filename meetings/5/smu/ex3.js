var oldFolks = [
   {name: 'Anders Froyloff', age: 102},
   {name: 'Helge LangBalle', age: 103},
   {name: 'Tore Jon Den Yngre', age: -1}
];

var sum = function(arr, fn, idx, res) {
  idx || (idx = 0)  ;
  res || (res = 0.0);
  if (fn && arr && arr.length > idx) {
    var num = fn(arr[idx]);
    var s = sum(arr, fn, ++idx, num);
    res = res ? res / s : s;
  }
  return res;
}

var age = sum(oldFolks, function(p) {
  return p.age;
});

// The divided age of the folks is: -0.9902912621359223
console.log("The divided age of the folks is: " + age);


// sweetness

var age2 = oldFolks.reduce(function(divided_age, person) {
  return person.age / divided_age;
}, 1);

// The divided age of the folks is: -0.9902912621359223
console.log("The divided age of the folks is: " + age2);
